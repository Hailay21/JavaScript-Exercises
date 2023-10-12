//Frist need to create collection of fruit
//Write the type of fruit in array in two ways: in [] or by declaration of new Array
const fruits = ['apple', 'banana', 'cherry', 'orange', 'watermelon', 'Strawberry'];
const fruit1= new Array('apple', 'banana', 'cherry', 'orange', 'Kewy', 'watermelon');
// access elemens from collection of fruit
console.log(`Display all fruits: ${fruits}`);
console.log(`Display the second element of fruits: ${fruits[1]}`);

//use splice, push, pop, shift, unshift function to remove the third element of the fruit
fruits.splice(2, 1);// remove the third element
console.log(`Display after removed third element of the fruit: ${fruits}`);

//Rename the third element of the fruit to grape fruit and we will use splice function
// You can add using index also. example fruits[2]='grape';
fruits.splice(3, 2, 'grape'); // add grape to the third element
console.log(`Display after added grape to third element of the fruit: ${fruits}`);

fruits.push('Lemon'); // Adding lemon to the end of array
console.log(`Display after added third element of the fruit: ${fruits}`);
console.log (`Number of elements in the fruit are: ${fruits.length}`); //

// How can iterate elements in array? 
// Using loop iteration, for each, for
for (let i = 0  ; i < fruits.length  ; i++) { 
    console.log (`Iterate using for all fruits: ${fruits[i]}`); }
//using for each
fruits.forEach ((fruits) => {
    console.log (`Iterate using for each:  ${fruits}`);}); //