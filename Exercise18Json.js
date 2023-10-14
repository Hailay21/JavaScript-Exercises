//Assuming you have the JSON data in a variable called jsonData:
const jsonData = '[{"title": "Nutrition", "author": "Hailay", "publishedYear": 2013, "price": 89.99}, {"title": "Balance diet", "author": "Solomon", "publishedYear": 1958, "price": 78.99}, {"title": "Java code", "author": "Gebru", "publishedYear": 2023, "price": 92.99}]';

//Parse the JSON data into an array of book objects
const bookInfo = JSON.parse(jsonData);

//Calculate and log the total price of all the books:
const totalPrice = bookInfo.reduce((total, book) => total + book.price, 0);
console.log("Total price of all books: $" + totalPrice.toFixed(2));

//Filter the books published before the year 1960 and create a new array with these books:
const oldBooks = bookInfo.filter(book => book.publishedYear < 1960);
console.log("Books published before 1960:", oldBooks);

//Sort the books by their published year in ascending order:
const orderedBooks = bookInfo.slice().sort((a, b) => a.publishedYear - b.publishedYear);
console.log("Books orderd by published year:", orderedBooks);

