//Using a for Loop: to go through the array and print each number.
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(`Result from for loop: ${numbers[i]}`);
}

//Using forEach Method: to iterate through the colors array and print each color to the console.
const colors = ['Black', 'White', 'blueGray', 'greenGray'];
colors.forEach((colorResult) => {
  console.log(`Result from forEach: ${colorResult}`);
});

//Using map Method: to create a new array, squaredGrades, 
const grades = [5, 8, 10, 7, 9];
const squaredGrades = grades.map((grade) => grade * grade);
console.log(`Square result: ${squaredGrades}`);

const results = [65, 44, 12, 4];
const newArr = results.map(myFunction);

function myFunction(num) {
  return num * 10;
}

console.log(`New result after multiple by ten: ${newArr}`); // [650, 440, 120, 40]


//Using filter Method: to create a new array, adults, containing only the ages that are greater than or equal to 18 from the ages array.
const ages = [16, 20, 14, 25, 30, 18];
const adults = ages.filter((age) => age >= 18);
console.log(`Adults above 17 years: ${adults}`);

