// Define the function add
function add(a, b) {
  return a + b;
}

// Get the arguments from process.argv
// process.argv[0] = 'node', process.argv[1] = script path
const arg1 = Number(process.argv[2]);
const arg2 = Number(process.argv[3]);

// Calculate and print the result
console.log(add(arg1, arg2));