//Back-end logic 

//Function to add 2 numbers
var add = function(number1, number2) {
  return number1 + number2
};

//Function to subtract 2 numbers
var subtract = function(number1, number2) {
  return number1 - number2
};

//Function to multiply 2 numbers
var multiply = function(number1, number2) {
  return number1 * number2
};

//Function to divide 2 numbers
var divide = function(number1, number2) {
  return number1 / number2
};

//Front-end

$(document).ready(function() {
    //Addition form
    $("form#add").submit(function(event){
        event.preventDefault();
        //Ask user for number1
        var number1 = parseInt($("#add1").val());
        //Ask user for number2
        var number2 = parseInt($("#add2").val());
        //Add 2 numbers
        var result = add(number1, number2);
        //Test
        //alert(result);
        $("#outputAdd").text(result);
    });

    //Subtraction form
    $("form#subtract").submit(function(event){
        event.preventDefault();
        //Ask user for number1
        var number1 = parseInt($("#subtract1").val());
        //Ask user for number2
        var number2 = parseInt($("#subtract2").val());
        //Add 2 numbers
        var result = subtract(number1, number2);
        //Test
        //alert(result);
        $("#outputSubtract").text(result);
    });

    //Multiplication form
    $("form#multiply").submit(function(event){
        event.preventDefault();
        //Ask user for number1
        var number1 = parseInt($("#multiply1").val());
        //Ask user for number2
        var number2 = parseInt($("#multiply2").val());
        //Add 2 numbers
        var result = multiply(number1, number2);
        //Test
        //alert(result);
        $("#outputMultiply").text(result);
    });

    //Division form
    $("form#divide").submit(function(event){
        event.preventDefault();
        //Ask user for number1
        var number1 = parseInt($("#divide1").val());
        //Ask user for number2
        var number2 = parseInt($("#divide2").val());
        //Add 2 numbers
        var result = divide(number1, number2);
        //Test
        //alert(result);
        $("#outputDivide").text(result);
    });

});
