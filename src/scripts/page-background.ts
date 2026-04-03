import { AstroError } from "astro/errors";

interface LetterPosition {
	x: number;
	y: number;
	letter: string;
}

interface LetterInstance extends LetterPosition {
	timestamp: number;
	fadeout: number;
}

interface AnimationProfile {
	density: number;
	frameIntervalMs: number;
}

class PageBackground {
	private LETTER_FADE_DURATION: [number, number] = [2, 7];

	private baseCanvas: HTMLCanvasElement;
	private overlayCanvas: HTMLCanvasElement;

	private baseCtx: CanvasRenderingContext2D;
	private overlayCtx: CanvasRenderingContext2D;

	private width: number = window.innerWidth;
	private height: number = window.innerHeight;

	private letterPositions: LetterPosition[] = [];
	private letterInstances: LetterInstance[] = [];

	private primaryRgb: string;
	private reducedMotionQuery: MediaQueryList | null = null;
	private reducedMotion = false;
	private animationFrameId: number | null = null;
	private resizeRequested = false;
	private animationDensity = 1;
	private targetFrameIntervalMs = 16.7;
	private lastRenderedAt = 0;
	private onReducedMotionChange = (event: MediaQueryListEvent) => {
		this.setReducedMotion(event.matches);
	};

	constructor(baseCanvas: HTMLCanvasElement, overlayCanvas: HTMLCanvasElement) {
		const baseCtx = baseCanvas.getContext("2d");
		const overlayCtx = overlayCanvas.getContext("2d");

		if (!baseCtx || !overlayCtx) {
			throw new AstroError("Unable to get 2D context.");
		}

		this.baseCanvas = baseCanvas;
		this.overlayCanvas = overlayCanvas;
		this.baseCtx = baseCtx;
		this.overlayCtx = overlayCtx;

		baseCanvas.width = this.width;
		baseCanvas.height = this.height;

		overlayCanvas.width = this.width;
		overlayCanvas.height = this.height;

		this.primaryRgb = window
			.getComputedStyle(document.documentElement)
			.getPropertyValue("--primary-rgb")
			.trim();

		this.reducedMotionQuery = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		);
		this.setReducedMotion(this.reducedMotionQuery.matches);
		this.reducedMotionQuery.addEventListener(
			"change",
			this.onReducedMotionChange,
		);

		this.refreshAnimationProfile();
		this.initBackground();
	}

	private getAnimationProfile = (): AnimationProfile => {
		const viewportArea = this.width * this.height;
		const navigatorDetails = navigator as Navigator & {
			deviceMemory?: number;
			connection?: { saveData?: boolean };
		};
		const hardwareConcurrency = navigatorDetails.hardwareConcurrency ?? 4;
		const deviceMemory = navigatorDetails.deviceMemory ?? 4;
		const prefersReducedData = window.matchMedia(
			"(prefers-reduced-data: reduce)",
		).matches;

		let density = 1;
		let frameIntervalMs = 16.7;

		if (viewportArea > 2_400_000 || this.width > 1600) {
			density *= 0.85;
			frameIntervalMs = 24;
		}

		if (viewportArea > 4_000_000 || this.width > 2200) {
			density *= 0.75;
			frameIntervalMs = 33.3;
		}

		if (hardwareConcurrency <= 4) {
			density *= 0.85;
			frameIntervalMs = Math.max(frameIntervalMs, 24);
		}

		if (deviceMemory <= 4) {
			density *= 0.85;
			frameIntervalMs = Math.max(frameIntervalMs, 24);
		}

		if (navigatorDetails.connection?.saveData || prefersReducedData) {
			density *= 0.75;
			frameIntervalMs = Math.max(frameIntervalMs, 33.3);
		}

		return {
			density: Math.max(0.45, Math.min(1, density)),
			frameIntervalMs,
		};
	};

	private refreshAnimationProfile = () => {
		const profile = this.getAnimationProfile();
		this.animationDensity = profile.density;
		this.targetFrameIntervalMs = profile.frameIntervalMs;
	};

	private initBackground = () => {
		this.letterPositions = [];
		this.letterInstances = [];

		let text: string =
			document.title.toLowerCase().split(" | ")[0].replace(/\s/g, "_") ||
			"spectre";

		if (text.includes("_")) {
			text += "_";
		}

		const letters = Math.ceil(this.width / 17);
		const lines = Math.ceil(this.height / 35);

		this.baseCtx.font = "28px Geist Mono";
		this.baseCtx.textAlign = "start";
		this.baseCtx.textBaseline = "top";
		this.baseCtx.fillStyle = "rgba(255, 255, 255, 0.01)";

		for (let i = 0; i < lines; i++) {
			for (let j = 0; j < letters; j++) {
				this.baseCtx.fillText(text[j % text.length], j * 17, i * 35);
				this.letterPositions.push({
					x: j * 17,
					y: i * 35,
					letter: text[j % text.length],
				});
			}
		}

		if (!this.reducedMotion) {
			const animatedLetterCount = Math.max(
				1,
				Math.min(
					this.letterPositions.length,
					Math.round(lines * 0.75 * this.animationDensity),
				),
			);
			const randomLetters = this.pickRandomItems<LetterPosition>(
				this.letterPositions,
				animatedLetterCount,
			);

			this.overlayCtx.font = "bold 28px Geist Mono";
			this.overlayCtx.textAlign = "start";
			this.overlayCtx.textBaseline = "top";
			this.overlayCtx.fillStyle = `rgba(${this.primaryRgb}, 0)`;
			this.overlayCtx.shadowBlur = this.targetFrameIntervalMs > 24 ? 12 : 16;
			this.overlayCtx.shadowColor = `rgba(${this.primaryRgb}, 0)`;

			const now = Date.now();

			for (const letter of randomLetters) {
				this.overlayCtx.fillText(letter.letter, letter.x, letter.y);

				const animLength =
					this.LETTER_FADE_DURATION[0] +
					Math.random() *
						(this.LETTER_FADE_DURATION[1] - this.LETTER_FADE_DURATION[0]);

				this.letterInstances.push({
					x: letter.x,
					y: letter.y,
					letter: letter.letter,
					timestamp: now,
					fadeout: now + animLength * 1000,
				});
			}
		} else {
			this.overlayCtx.clearRect(
				0,
				0,
				this.overlayCanvas.width,
				this.overlayCanvas.height,
			);
		}

		this.baseCanvas.style.opacity = "1";

		if (!this.reducedMotion) {
			this.scheduleNextFrame();
		}
	};

	private easeInOutSine = (timestamp: number, start: number, end: number) => {
		const totalDuration = end - start;

		if (timestamp < start) {
			return 0;
		}

		if (timestamp > end) {
			const elapsedAfterEnd = timestamp - end;
			const progressAfterEnd = elapsedAfterEnd / (totalDuration / 2);

			return Math.sin(progressAfterEnd * Math.PI);
		}

		const progress = (timestamp - start) / totalDuration;

		return Math.max(0, 0.5 - 0.5 * Math.cos(progress * Math.PI));
	};

	private pickRandomItems = <T>(arr: Array<T>, n = 20): Array<T> => {
		let len = arr.length;

		const result = new Array(n);
		const taken = new Array(len);

		if (n > len) {
			throw new AstroError(
				"pickRandomItems: requested more elements than available",
			);
		}

		while (n--) {
			const x = Math.floor(Math.random() * len);
			result[n] = arr[x in taken ? taken[x] : x];
			taken[x] = --len in taken ? taken[len] : len;
		}

		return result;
	};

	private setReducedMotion = (shouldReduceMotion: boolean) => {
		this.reducedMotion = shouldReduceMotion;
		this.cancelAnimationFrame();

		if (this.reducedMotion) {
			this.overlayCtx.clearRect(
				0,
				0,
				this.overlayCanvas.width,
				this.overlayCanvas.height,
			);
			return;
		}

		if (this.letterInstances.length === 0 && this.letterPositions.length > 0) {
			this.initBackground();
			return;
		}

		this.scheduleNextFrame();
	};

	private scheduleNextFrame = () => {
		if (this.reducedMotion || this.animationFrameId != null) {
			return;
		}

		this.animationFrameId = requestAnimationFrame(this.redrawBackground);
	};

	private cancelAnimationFrame = () => {
		if (this.animationFrameId == null) {
			return;
		}

		window.cancelAnimationFrame(this.animationFrameId);
		this.animationFrameId = null;
	};

	public scheduleResize = () => {
		if (this.resizeRequested) {
			return;
		}

		this.resizeRequested = true;
		window.requestAnimationFrame(() => {
			this.resizeRequested = false;
			this.resizeBackground();
		});
	};

	private redrawBackground = () => {
		this.animationFrameId = null;

		if (this.reducedMotion) {
			return;
		}

		const now = Date.now();
		if (
			this.targetFrameIntervalMs > 16.7 &&
			this.lastRenderedAt > 0 &&
			now - this.lastRenderedAt < this.targetFrameIntervalMs
		) {
			this.scheduleNextFrame();
			return;
		}

		this.lastRenderedAt = now;

		this.overlayCtx.clearRect(
			0,
			0,
			this.overlayCanvas.width,
			this.overlayCanvas.height,
		);

		this.overlayCtx.font = "bold 28px Geist Mono";
		this.overlayCtx.textAlign = "start";
		this.overlayCtx.textBaseline = "top";
		this.overlayCtx.shadowBlur = this.targetFrameIntervalMs > 24 ? 12 : 16;

		const nextInstances: LetterInstance[] = [];

		for (const letter of this.letterInstances) {
			if (letter.fadeout > now) {
				nextInstances.push(letter);
				continue;
			}

			const alpha = this.easeInOutSine(now, letter.timestamp, letter.fadeout);
			if (alpha <= 0) {
				const randomLetter = this.pickRandomItems<LetterPosition>(
					this.letterPositions,
					1,
				)[0];
				const replacementTimestamp = now;
				const replacementFadeout =
					replacementTimestamp +
					(this.LETTER_FADE_DURATION[0] +
						Math.random() *
							(this.LETTER_FADE_DURATION[1] - this.LETTER_FADE_DURATION[0])) *
						1000;

				nextInstances.push({
					x: randomLetter.x,
					y: randomLetter.y,
					letter: randomLetter.letter,
					timestamp: replacementTimestamp,
					fadeout: replacementFadeout,
				});
				continue;
			}

			this.overlayCtx.fillStyle = `rgba(${this.primaryRgb}, ${alpha})`;
			this.overlayCtx.shadowColor = `rgba(${this.primaryRgb}, ${alpha})`;
			this.overlayCtx.fillText(letter.letter, letter.x, letter.y);
			nextInstances.push(letter);
		}

		this.letterInstances = nextInstances;

		this.scheduleNextFrame();
	};

	public resizeBackground = () => {
		this.cancelAnimationFrame();
		this.resizeRequested = false;

		this.width = window.innerWidth;
		this.height = window.innerHeight;

		this.refreshAnimationProfile();

		this.baseCanvas.width = this.width;
		this.baseCanvas.height = this.height;

		this.overlayCanvas.width = this.width;
		this.overlayCanvas.height = this.height;

		this.baseCtx.clearRect(0, 0, this.baseCanvas.width, this.baseCanvas.height);
		this.overlayCtx.clearRect(
			0,
			0,
			this.overlayCanvas.width,
			this.overlayCanvas.height,
		);

		this.letterInstances = [];
		this.letterPositions = [];

		this.initBackground();
	};
}

async function loadFont() {
	const font = new FontFace("Geist Mono", "url(/fonts/GeistMono.woff2)");

	await font.load();

	document.fonts.add(font);
}

async function initialiseBackground() {
	await loadFont();

	const canvas = document.getElementById("bg-canvas") as HTMLCanvasElement;
	const overlayCanvas = document.getElementById(
		"overlay-canvas",
	) as HTMLCanvasElement;

	const background = new PageBackground(canvas, overlayCanvas);

	window.addEventListener("resize", () => {
		background.scheduleResize();
	});
}

initialiseBackground();
