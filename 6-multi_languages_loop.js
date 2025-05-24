const languages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

let output = "";      // String to hold all lines
let i = 0;            // Loop index

while (i < languages.length) {
  output += languages[i] + "\n"; // Append line + newline
  i++;
}

console.log(output.trim()); // Print all lines, trim removes last extra newline
