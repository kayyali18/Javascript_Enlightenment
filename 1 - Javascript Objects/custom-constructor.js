/* define Person constructor function in order to create custom
Person() objects later */
/* Person is a constructor function. It was written with the inent of being used with the 'new' keyword */

const Person = function(living, age, gender) {
  /* 'this' below is the new object that is being created
    eg.  (this = new Object()) */

  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = function() {
    return this.gender;
  };

  /* when the function is called using the 'new' keyword "this" is returned instead of undefined */
};

// instantiate a new Person object and store it in Ahmad

let Ahmad = new Person(true, 24, "Male");

console.log("\nLogging Ahmad object instance:\n", Ahmad);
console.log("\nLogging Ahmad.getGender():\n", Ahmad.getGender());
console.log("\nLogging Ahmad.constructor:\n", Ahmad.constructor);

/* The String() constructor function below, having been defined by Javascript, has the same pattern. Because the string constructor is native to JS, all we oughta do to get a string instance is to make one by instantiating it. But the pattern is the same whethere we use native constructors like String() or custom ones like the Person() contructor above.
 */

// instantiate a String object stored in the myString variable
var myString = new String("foo");

console.log("\nLogging myString instance of String(): \n", myString);
