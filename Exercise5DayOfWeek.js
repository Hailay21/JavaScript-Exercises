let dayOfWeek= 8;
let dayOfName ;
switch(dayOfWeek) {
case 1:
    dayOfName = 'Monday';
    break;
case 2:
    dayOfName = 'Tuesday';
    break;
case 3:
    dayOfName = 'Wednesday';
    break;
case 4:
    dayOfName = 'Thursday';
    break;
case 5:
        dayOfName = 'Friday';
        break;
case 6:
    dayOfName = 'Saturday';
    break;
case 7:
    dayOfName = 'Sunday';
    break;
default:
    console.error ('Invalid day of week entered and try again');
}

if (dayOfName>=0 && dayOfName<=day) {

console.log(`Day Of the Week is: ${dayOfName}`); 
}