//Analyses 
// First define the function for the rectangle and circles
// Define the parameters for both the rectangle and the circles

// Define a function to calculate the area of a rectangle Formula: A = L * W
function calculateRectangleArea(length, width){
    if(isNaN(length) || length <=0 || isNaN(width) || width <=0){
        return;
    }
    return length * width;
}

// Define a function to calculate the perimeter of a rectangle Formula: P = 2 * (L + W) or 2L + 2W
function calculateRectanglePerimeter(length, width) {
    if(isNaN(length) || length <=0 || isNaN(width) || width <=0){
        return;
    }
    return 2 * (length + width);
  }

// Define a function to calculate the area of a circle Formula: A = π * r^2
//"r" represents the radius of the circle. The radius is the distance from the center of the circle to any point on its edge.
//"π" (pi) is a constant approximately equal to 3.14.
function calculateCircleArea(radius) {
    if(isNaN(radius) || radius <=0){
        return;
    }
    return Math.PI * radius * radius;
  }

// Define a function to calculate the circumference of a circle Formula: C = 2 * π * r
function calculateCircleCircumference(radius) {
    if(isNaN(radius) || radius <=0){
        return;
    }
    return 2 * Math.PI * radius;
  }

  // Invoke functions for the rectangle with different values
const rectLength = 5;
const rectWidth = 3;
const rectArea = calculateRectangleArea(rectLength, rectWidth);
const rectPerimeter = calculateRectanglePerimeter(rectLength, rectWidth);

console.log(`
    Rectangle Area: ${rectArea}, 
    Perimeter: ${rectPerimeter}`);

// Invoke functions for the circle with different radius values
const circleRadius = 4;
const circleArea = calculateCircleArea(circleRadius);
const circleCircumference = calculateCircleCircumference(circleRadius);

console.log(`
    Circle Area: ${circleArea}, 
    Circumference: ${circleCircumference}`);


