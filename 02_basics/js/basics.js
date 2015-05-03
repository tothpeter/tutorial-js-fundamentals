// Data types (loosly typed)

// Primitives
// # Number
console.log(isNaN("A"));

// # String
// # Boolean

// ## Falsey
// false, 0, '', null, undefined, NaN
// ## Truthy
// All others

// Special and almost similar data types
// Undefined -> can't be used for value
// Null -> datatype, can be used as value

// Composite data type
// Array, Object

var obj = {
  asd: 1,
  d: 2
};

obj.asd;
obj['asd'];

var addition = 1 + 1,
    subtraction = 1 - 1,
    multiplication = 1 * 1,
    division = 1 / 1,
    remainder = 5 % 2; // modulus operator

// Comparison operators
// Regular Comparison ==
// Strict Comparison ===

typeof 1
// typeof [] -> object
// typeof null -> object
// true && 1 -> 1 -> && returns the value of the last operand
// !!(true && 1) -> true
var bar = {};
// (bar !== null) && (typeof bar === "object")
// (bar !== null) && ((typeof bar === "object") || (typeof bar === "function"))
// (bar !== null) && (typeof bar === "object") && (toString.call(bar) !== "[object Array]")

function getThingBycolour(colour) {
  var things = {
    red: 'a red thing',
    green: 'a green thing'
  }

  return things[colour] || 'Default string';
}