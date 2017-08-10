/*Function to add 2 numbers*/
var add = function(number1, number2) {
  return number1 + number2
};

/*Function to subtract 2 numbers*/
var subtract = function(number1, number2) {
  return number1 - number2
};

/*Function to multiply 2 numbers*/
var multiply = function(number1, number2) {
  return number1 * number2
};

/*Function to divide 2 numbers*/
var divide = function(number1, number2) {
  return number1 / number2
};

/*Ask user for number1*/
var number1 = parseInt(prompt("Enter a number:"));

/*Ask user for number2*/
var number2 = parseInt(prompt("Enter a another number:"));

/*Add 2 numbers*/
var resultAdd = add(number1, number2);

/*Display results*/
alert(resultAdd);
//
// /*Subtract 2 numbers*/
// var resultSubtract = subtract(number1, number2);
//
// /*Display results*/
// alert(resultSubtract);
//
// /*Multiply 2 numbers*/
// var resultMultiply = multiply(number1, number2);
//
// /*Display results*/
// alert(resultMultiply);
//
//
// /*Multiply 2 numbers*/
// var resultDivide = divide(number1, number2);
//
// /*Display results*/
// alert(resultDivide);
