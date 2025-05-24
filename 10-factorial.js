// Get the first argument from command line (process.argv[2])
const arg = process.argv[2];

// Convert argument to integer
const num = parseInt(arg, 10);

// Recursive factorial function
function factorial(n) {
  // Base case: if n is 0 or 1, factorial is 1
  if (n <= 1) return 1;
  // Recursive call: n * factorial of (n-1)
  return n * factorial(n - 1);
}

// If num is NaN (not a number), print 1
// Otherwise print factorial(num)
if (isNaN(num)) {
  console.log(1);
} else {
  console.log(factorial(num));
}
