// Write a JavaScript function named calculateArea that calculates the area of a rectangle.
// Declare variables length and width with values 5 and 3 respectively. Print the area using
// these variables.
const calculateArea = (length, width) => {
  return length * width;
};
var length = 5;
var width = 3;
console.log(
  `Area of rectangle of Length :  ${length} and width : ${width} is ${calculateArea(
    length,
    width
  )}`
);
