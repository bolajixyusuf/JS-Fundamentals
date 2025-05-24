const arg = process.argv[2];
const count = parseInt(arg);

if (!count || count <= 0) {
  console.log("Missing number of occurrences");
} else {
  let output = "";
  let i = 0;
  while (i < count) {
    output += "C is fun\n";
    i++;
  }
  console.log(output.trim());
}