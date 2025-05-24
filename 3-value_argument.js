const firstArg = process.argv[2];  // first user argument

if (firstArg === undefined) {
  console.log("No argument");
} else {
  console.log(firstArg);
}