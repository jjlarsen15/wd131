// Constants and Variables
const PI = 3.14;
let radius = 3;
console.log(PI * radius * radius); // line 6 - outputs 28.26

// Change the value of radius
radius = 20;
console.log(PI * radius * radius); // line 11 - outputs 1256

// Type Coercion
const one = 1;
const two = "2";
console.log(one + two);         // line 18 - outputs "12" (string concatenation)
console.log(one + Number(two)); // line 21 - outputs 3 (number addition)

// Global and Block Scope
let course = "CSE131"; // global scope
if (true) {
  let student = "John";
  console.log(course);  // line 27 - works fine, course is global
  console.log(student); // line 28 - works fine, inside block
}
console.log(course);    // line 30 - works fine, course is global
console.log(student);   // line 31 - causes ReferenceError
