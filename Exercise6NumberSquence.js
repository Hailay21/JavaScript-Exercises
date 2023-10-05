//If we divide the number by two
//then the remainder will be zero and
// JavaScript will % (module) will 0 and 10%2 ==0
for (let y = 2; y <22;y++) {
if (y % 2 == 0) {
    console.log(`number squannce by for: ${y}`);
}
} 

let j = 2;
let evenNumberCount = 0;
while (evenNumberCount <=10) {
if (j%2 == 0) {
    evenNumberCount++;
    console.log(`even number count by while: ${j}`);
}
j++;
}

let i = 2;
let evenNumberCount1 = 0;
do {
  if (i%2 == 0) {
    evenNumberCount1++;
    console.log(`even number count by do while: ${i}`);
    }
   i++;
}while (evenNumberCount1<=10);
  