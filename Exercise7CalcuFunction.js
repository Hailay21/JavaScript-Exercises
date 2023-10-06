//Analyses 
//First understand the logicaan analysis and declare the variables
//Basic arithmetic operations: +, -,, *, /, 
// Functions to add two variables
const add = (a,b) => {
    if (isNaN(a) || isNaN(b)){
        return;
    }
     return  a + b; }

// Functions to substract two variables
const substraction = (a,b) => {
if (isNaN(a) || isNaN(b)){
    return;
}
 return  a - b; }

// Functions to multiply two variables
const multiplication = (a,b) => {
    if (isNaN(a) || isNaN(b)){
        return;
    }
     return  a * b; }

// Function to divide two numbers
const divide = (a, b) => {
    if (isNaN(a) || isNaN(b) || isNaN(b==0)){
        return;
    }
    return a / b;
  }

// Example to use
const value1 = 200;
const value2 = 20;

console.log("Addition:", add(value1, value2));          
console.log("Subtraction:", substraction(value1, value2));  
console.log("Multiplication:", multiplication(value1, value2));
console.log("Division:", divide(value1, value2));     

