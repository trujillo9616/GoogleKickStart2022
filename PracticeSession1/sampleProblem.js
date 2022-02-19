const fs = require("fs");
const input = fs.readFileSync('input/sample_problem_sample_ts1_input.txt', "utf8").trim().split("\n");

let currentLine = 0;

function readLine() {
	return input[currentLine++];
}

let numCases = parseInt(readLine(), 10);

for (let i = 1; i < numCases + 1; i++) {
	let n, m;
	let numCandies = 0;

	[n, m] = readLine().split(/\s+/);

	n = parseInt(n, 10);
	m = parseInt(m, 10);

	let candiesBags = readLine().split(/\s+/).map(Number);

	for (let j = 0; j < candiesBags.length; j++) {
		numCandies += candiesBags[j];
	}

	console.log("Case #" + i + ": " + (numCandies % m));
}