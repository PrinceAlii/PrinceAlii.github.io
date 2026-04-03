export async function GET() {
	return new Response(
		[
			"export async function init() {",
			"\treturn undefined;",
			"}",
			"",
			"export async function search() {",
			"\treturn { results: [] };",
			"}",
		].join("\n"),
		{
			headers: {
				"content-type": "application/javascript",
			},
		},
	);
}
