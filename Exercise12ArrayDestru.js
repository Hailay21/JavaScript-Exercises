//Using [first item, second item] can destruct arrays
const colors = ['Red', 'Green', 'Blue'];
let [firstcolor, secondcolor] =   colors;
//If you want to skip the first two and extract thrid one
//you can use the [,,thirdelement] operator
let [,,thirdelement]  = colors;
//collect remaining colors
let [firstElement, ...remainingColors] = colors;
// assign default colors
let [first = 'green'] = [];

//Swaping colors means switching
//Using [] [] 
let a=4;
let b= 5;
[a,b]=[b,a];
