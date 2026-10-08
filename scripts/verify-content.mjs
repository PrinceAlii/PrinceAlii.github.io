// Verifies resume-aligned content in the built site and enforces the
// site-wide no em dash / no en dash rule. Run after `pnpm build`.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const root = process.cwd();
const failures = [];

const walk = (dir, skip = []) => {
	const files = [];
	for (const name of readdirSync(dir)) {
		const path = join(dir, name);
		if (skip.some((s) => path.endsWith(s))) continue;
		if (statSync(path).isDirectory()) files.push(...walk(path, skip));
		else files.push(path);
	}
	return files;
};

// Binary assets cannot contain authored dashes; the resume PDF is the source document.
const binary = new Set([
	".pdf",
	".png",
	".jpg",
	".jpeg",
	".gif",
	".webp",
	".ico",
	".woff",
	".woff2",
]);
const textFiles = (files) => files.filter((file) => !binary.has(extname(file).toLowerCase()));

const decodeEntities = (html) =>
	html
		.replace(/&amp;/g, "&")
		.replace(/&#39;|&#x27;/g, "'")
		.replace(/&quot;/g, '"')
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">");

const dashPatterns = [
	{ label: "em dash U+2014", pattern: /\u2014/g },
	{ label: "en dash U+2013", pattern: /\u2013/g },
	{ label: "&mdash;", pattern: /&mdash;/gi },
	{ label: "&ndash;", pattern: /&ndash;/gi },
	{ label: "&#8212;", pattern: /&#8212;/g },
	{ label: "&#8211;", pattern: /&#8211;/g },
	{ label: "&#x2014;", pattern: /&#x0*2014;/gi },
	{ label: "&#x2013;", pattern: /&#x0*2013;/gi },
	{ label: "\\u2014 escape", pattern: /\\u2014/gi },
	{ label: "\\u2013 escape", pattern: /\\u2013/gi },
];

const scanDashes = (scope, files) => {
	let count = 0;
	for (const file of files) {
		const text = readFileSync(file, "utf8");
		for (const { label, pattern } of dashPatterns) {
			const hits = text.match(pattern);
			if (hits) {
				count += hits.length;
				failures.push(`${scope}: ${hits.length} x ${label} in ${relative(root, file)}`);
			}
		}
	}
	console.log(`dash scan ${scope}: ${files.length} files, ${count} occurrences`);
};

// 1. Dash scans across shipped sources and build output.
const distFiles = textFiles(walk(join(root, "dist")));
scanDashes("dist", distFiles);
scanDashes("src", textFiles(walk(join(root, "src"))));
scanDashes("public", textFiles(walk(join(root, "public"))));
scanDashes("astro.config.mjs", [join(root, "astro.config.mjs")]);

// 2. Required resume facts in the built pages.
const page = (route) => decodeEntities(readFileSync(join(root, "dist", route), "utf8"));
const experience = page("experience/index.html");
const contact = page("contact/index.html");
const home = page("index.html");

const required = {
	"experience/index.html": {
		html: experience,
		strings: [
			"Graduate DevOps Engineer",
			"Cadet DevOps",
			"Business Banking Associate",
			"Customer & Digital Service Representative",
			"Crew Member",
			"Feb 2026 to Present",
			"Mar 2025 to Feb 2026",
			"Nov 2024 to June 2025",
			"Mar 2023 to Nov 2024",
			"Aug 2019 to Mar 2023",
			"Redfern, NSW",
			"Ryde, NSW",
			"Mount Colah, NSW",
			"250",
			"ECS",
			"EC2 workspace instances",
			"RDS PostgreSQL",
			"Application Load Balancer",
			"ALB",
			"Helm chart upgrades",
			"Kubernetes cluster maintenance",
			"container troubleshooting",
			"GitHub Copilot",
			"internal and external stakeholders",
			"environment planning, data validation, and stakeholder coordination",
			"GitLab CI/CD queries, pipeline debugging, and general DevOps troubleshooting",
			"patching, configuration management, and routine maintenance",
			"AWS and Azure",
			"post-migration validation",
			"Sparx EA",
			"complex banking products",
			"varying levels of financial literacy",
			"+70",
			"high post-call survey completion rate",
			"specialist teams",
			"incorrect call transfers",
			"multi-agency transactions",
			"privacy legislation",
			"licensing and registration",
			"appropriate channels",
			"140 seconds",
			"Bachelor of Information Technology",
			"University of Technology Sydney",
			"2023 to 2025",
			"82.58%",
			"6.21",
			"Distinction",
			"Enterprise Systems Development",
			"Networking and Cybersecurity",
			"Operating Systems",
			"Red Hat Enterprise Linux (RHEL)",
			"Amazon Linux",
			"Windows Server",
			"Linux administration",
			"Languages",
			"Python",
			"Bash",
			"JavaScript / Node.js",
			"HTML/CSS",
			"Java",
			"Cloud & DevOps",
			"AWS ECS",
			"EKS",
			"RDS",
			"Lambda",
			"IAM",
			"Terraform",
			"AWS CDK (TypeScript)",
			"Containers & Orchestration",
			"Kubernetes",
			"Helm",
			"Docker",
			"production experience on EKS",
			"self-study on OpenShift",
			"Tooling",
			"GitLab administration",
			"Artifactory",
			"Jira",
			"Home lab",
			"Linux VMs",
			"RAID storage",
			"Cisco Meraki networking",
			"2nd in NSW",
			"Information Processes & Technology",
			"2022 HSC",
			"AWS Certified Solutions Architect - Associate",
			"in progress",
		],
	},
	"contact/index.html": {
		html: contact,
		strings: [
			"alibonagdaran@gmail.com",
			'href="mailto:alibonagdaran@gmail.com"',
			'href="https://www.alibo.dev"',
			"alibo.dev",
			"linkedin.com/in/alibonagdaran",
			"github.com/PrinceAlii",
			'href="/resume.pdf"',
		],
	},
	"index.html": {
		html: home,
		strings: ["Ali Bonagdaran", "Graduate DevOps Engineer at the Australian Bureau of Statistics"],
	},
};

for (const [route, { html, strings }] of Object.entries(required)) {
	for (const s of strings) {
		if (!html.includes(s)) failures.push(`missing in ${route}: "${s}"`);
	}
}

// Contact index numbers read in order: Email, Website, LinkedIn, GitHub, Resume.
const contactOrder = [...contact.matchAll(/contact-type">([^<]+)</g)].map((m) => m[1]);
const expectedOrder = ["Email", "Website", "LinkedIn", "GitHub", "Resume"];
if (contactOrder.join("|") !== expectedOrder.join("|")) {
	failures.push(
		`contact order is ${contactOrder.join(", ")}; expected ${expectedOrder.join(", ")}`,
	);
}

// 3. Absence checks: removed invented tags, invented metrics, old titles, banned surfaces.
const allHtml = distFiles
	.filter((file) => file.endsWith(".html"))
	.map((file) => decodeEntities(readFileSync(file, "utf8")))
	.join("\n");

const forbidden = [
	"Incident Triage",
	"Problem Solving",
	"Reliability",
	"Platform Engineering",
	"Developer Tooling",
	"Banking Operations",
	"Public Sector",
	"Digital Service</li>",
	"Graduate - DevOps Engineer",
	"Cadet - DevOps",
	"Teraform",
	"SYDNEY / AUSTRALIA",
];
for (const s of forbidden) {
	if (allHtml.includes(s)) failures.push(`forbidden string present in dist: "${s}"`);
}

// No invented survey percentage near the survey completion wording.
const surveyContext = experience.match(/[^.]{0,120}survey completion[^.]{0,120}/g) ?? [];
for (const sentence of surveyContext) {
	if (/\d+(\.\d+)?\s*%/.test(sentence)) {
		failures.push(`invented survey percentage: "${sentence.trim()}"`);
	}
}

// Certification must never be presented without its in progress status in the same row.
const certRow = experience.match(
	/<li[^>]*>(?:(?!<\/li>)[\s\S])*Solutions Architect(?:(?!<\/li>)[\s\S])*<\/li>/,
);
if (!certRow?.[0].includes("in progress")) {
	failures.push("certification row is missing its in progress status");
}

// Writing must not be in primary navigation.
const nav = home.match(/<nav class="site-nav"[\s\S]*?<\/nav>/)?.[0] ?? "";
if (/href="\/writing/.test(nav)) failures.push("Writing appears in primary navigation");

if (failures.length > 0) {
	console.error(`\nverify-content FAILED (${failures.length}):`);
	for (const failure of failures) console.error(`  - ${failure}`);
	process.exit(1);
}

console.log(
	"\nverify-content passed: resume facts present, invented content absent, zero em/en dashes.",
);
