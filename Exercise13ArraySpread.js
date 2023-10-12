//Spread Operator (...):
//The spread operator is used to expand or spread the elements of an array or any iterable 
//(e.g., strings, objects, maps, sets) into another array or function arguments.
//Spread Operator for Array Creation:
const fruits1 = ['apple', 'banana', 'cherry'];
const fruits2 = ['date', 'fig'];

const allFruits = [...fruits1, ...fruits2];

console.log(allFruits); // ['apple', 'banana', 'cherry', 'date', 'fig']

//Spread Operator for Function Arguments:
function addNumbers(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return;
    }
    return a + b + c;
  }
  
  const numbers = [2, 4, 6];
  const sum = addNumbers(...numbers);
  
  console.log(`Sum of the elements: ${sum}`); // 12

//Rest Parameter (...): collect all the elements of an array or any iterable
//The rest operator is used in function parameters and is denoted by .... 
//It allows you to represent an indefinite number of arguments as an array within a function.
//Rest Operator in Function Parameters:
const multiply= (Number1, ...restNumbers)=> {
    if(isNaN(Number1) || !Array.isArray(restNumbers)){
    return;
  }
  let product = 1;
  numbers.forEach(number =>{
    product = product * number
  })
  return Number1 * product;
};
let result1 = multiply(1, 2, 3, 4);
console.log(`Multiply result: ${result1}`);

//We use the spread operator to create a new array, copiedColors below which contains the same elements as the colors array, 
//effectively making a shallow copy of the original array.
//Spreading Values from an Array: 
const colors = ['red', 'green', 'blue'];
const copiedColors = [...colors];

console.log(copiedColors); // ['red', 'green', 'blue']
