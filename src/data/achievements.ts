export type Achievement =
	| { kind: "award"; rank: string; subject: string; exam: string }
	| { kind: "certification"; name: string; status: "in progress" };

// Achievements from public/resume.pdf. The certification name uses a plain
// hyphen in place of the resume's en dash (site-wide no-dash typography rule).
// The literal status type means the certification cannot be shown as earned.
export const achievements: readonly Achievement[] = [
	{
		kind: "award",
		rank: "2nd in NSW",
		subject: "Information Processes & Technology",
		exam: "2022 HSC",
	},
	{
		kind: "certification",
		name: "AWS Certified Solutions Architect - Associate",
		status: "in progress",
	},
] as const;
