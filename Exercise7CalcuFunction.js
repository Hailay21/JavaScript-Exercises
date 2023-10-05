//Analyses 
//First understand the logicaan analysis and declare the variables
//Basic arithmetic operations: +, -,, *, /, 
// Functions to add two variables
function add(a,b) 
{ return  a + b; }

// Functions to substract two variables
function substraction(a,b) 
{ return  a - b; }

// Functions to multiply two variables
function multiplication(a,b) 
{ return  a * b; }

// Function to divide two numbers
function divide(a, b) {
    // Check for division by zero
    if (b === 0) {
      return "Division by zero is not allowed";
    }
    return a / b;
  }

// Example to use
const value1 = 20;
const value2 = 0;

console.log("Addition:", add(value1, value2));          
console.log("Subtraction:", substraction(value1, value2));  
console.log("Multiplication:", multiplication(value1, value2));
console.log("Division:", divide(value1, value2));     

