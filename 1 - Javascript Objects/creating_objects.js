// Creating a new Object instance

var ahmad = new Object();

// fill up the ahmad object with properties
// using dot notation
ahmad.living = true;
ahmad.age = 24;
ahmad.gender = "Male";
ahmad.getGender = function() {
  return ahmad.gender;
};

console.log("Logging ahmad object:\n", ahmad);
console.log("\nLogging getGender method on ahmad:\n", ahmad.getGender());
