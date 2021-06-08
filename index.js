//Create an anonymous function and set it equal to a variable.

let trifold = function(usersInput) {
// a) If passed a number, return the tripled value.
  if (typeof usersInput === "number") {
    return usersInput * 3;
// b) If passed a string, return the string “ARRR!”  
  } else (typeof usersInput === "string") 
      return "ARRR!";
}

console.log(trifold("Howdy!"));


let arr = ['Elocution', 21, 'Clean teeth', 100];
/* Use your function and the map method to change an array as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/
let tripleOrArrr = arr.map(trifold);

console.log(arr);
console.log(tripleOrArrr);