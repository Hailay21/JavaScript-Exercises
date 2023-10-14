//What to do? Create car object
//How? declare const object and properties for the car
const car = {
    make: 'Nissan',
    model: 'Versa',
    year: 2000,
}

console.log(`Car model: ${car.model}`);
console.log(`Car make: ${car.make}`);
console.log(`Car year: ${car.year}`);

// we need to add new methods for the car
car.start = function(){
    console.log(`The car is starting`);
}
car.start(); // this is the way to invoke a function