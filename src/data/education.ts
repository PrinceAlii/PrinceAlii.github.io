export type Education = {
	degree: string;
	institution: string;
	wam: string;
	gpa: string;
	classification: string;
	major: string;
	subMajor: string;
	startYear: string;
	endYear: string;
};

// Verbatim values from the Education section of public/resume.pdf.
export const education: Education = {
	degree: "Bachelor of Information Technology",
	institution: "University of Technology Sydney",
	wam: "82.58%",
	gpa: "6.21",
	classification: "Distinction",
	major: "Enterprise Systems Development",
	subMajor: "Networking and Cybersecurity",
	startYear: "2023",
	endYear: "2025",
};
