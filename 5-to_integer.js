const input = process.argv[2];
const number = parseInt(input, 10); // Convert to integer base 10

if (isNaN(number)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${number}`);
}