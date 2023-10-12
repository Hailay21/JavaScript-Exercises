//Using [first item, second item] can destruct arrays
//Destructure an Array:
const colors = ['Black', 'White', 'Yellow', 'Gray', 'Green'];
const [color1, color2, ...color3] = colors;

console.log(color1); // 'Black'
console.log(color2); // 'White'
console.log(color3); // 'Yellow', 'Gray', 'Green'

//Skipping Elements:
//If you want to skip the first two and extract thrid one
//you can use the [, , thirdelement] operator
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let [, , thirdelement]  = numbers;
console.log(thirdelement);

//Rest Parameter:
let [firstElement, ...remainingColors] = colors;
const fruits = ['apple', 'banana', 'cherry', 'date'];
const [firstFruit, ...otherFruits] = fruits;

console.log(firstFruit); // 'apple'
console.log(otherFruits); // ['banana', 'cherry', 'date']

// Assign default values
let vegitables=[];
let [firstFruit1 = 'Garlic'] = vegitables;
console.log(firstFruit1); // 'Garlic'

//Swaping values Using [] [] 
let a=4;
let b= 5;
[a,b]=[b,a];

console.log(a); // 5
console.log(b); // 4
