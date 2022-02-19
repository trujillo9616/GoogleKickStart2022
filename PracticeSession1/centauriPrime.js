const fs = require("fs");
const input = fs.readFileSync('input/centauri_prime_sample_ts1_input.txt', "utf8").trim().split("\n");

let currentLine = 0;

function readLine() {
	return input[currentLine++];
}

let numCases = parseInt(readLine(), 10);

let vowelsSet = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);

const getRuler = kingdom => {
    let lastLetter = kingdom.split('')[kingdom.length - 1];

    if (lastLetter === 'y' || lastLetter === 'Y') return "nobody.";
    if (vowelsSet.has(lastLetter)) return "Alice.";
    return "Bob."
}

for (let i = 1; i < numCases + 1; i++) {
    let kingdom = readLine();

    let ruler = getRuler(kingdom);

    console.log("Case #" + i + ": " + kingdom + " is ruled by " + ruler);
}
