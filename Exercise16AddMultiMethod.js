const student = {
    name: 'Hailay',
    age: 38,
    address:
        {
           streetAddress: '2640 Main St',
           city: 'Jacksonville',
           zipCode: 32221, 
        }
    }
//First need to declar the object name and add the properties
student.greet = function(){
    console.log('Hello how are you. This is '.concat(student.name));
    };
let Street1= "1730 common way";
let City1= "Atlanta";
let zipCode1= "324565"
student.changeAddress = (Street1, City1, zipCode1)=>{ 
    student.address.streetAddress = Street1;
    student.address.city = City1;
    student.address.zipCode = zipCode1
}

student.changeAddress(Street1, City1, zipCode1)
console.log(`The student city address is: ${student.address.city}`);

console.log(student.address);
student.greet();







