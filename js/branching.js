$(document).ready(function(){
    //Check age
    // First way

    // var age = parseInt(prompt("How old are you?"));

    // if (age >= 21) {
    //     $("#drinks").show();
    // } else if (age === 21) {
    //     $("#drinks").show();
    // } else {
    //     $("#under-21").show();
    // }

    // Second way

    var over21 = confirm("Are you over 21? Click OK if YES or Cancel for no.");

    if (over21){
        $("#drinks").show();
    } else {
        $("#under-21").show();
    }
});