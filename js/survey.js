$(document).ready(function(){
    // Select Boxes
    $("form#userInfo").submit(function(event){
        event.preventDefault();
        //Read user input
        var dob = $("#born").val();
        var colorInput = $("#color").val();
        var beverageInput = $("#beverage").val();
        var rulesInput = parseInt($("#rules").val());
        var bandInput = $("#band").val();
        var flavorInput = $("input:radio[name=flavor]:checked").val();
        //Test
        // alert(beverage);
        $(".born").text(dob);
        $(".color").text(colorInput);
        $(".beverage").text(beverageInput);
        $(".rules").text(rulesInput);  
        $(".band").text(bandInput);
        $(".flavor").text(flavorInput);
        $("#story").show();
        // $("#outputSelectBoxes1").text(beverage);
    });

    // Date
    // $("form#dateForm").submit(function(event){       
    //     event.preventDefault();
    //     //Read use input
    //     var dob = $("#born").val();
    //     var favoriteColor = $("#color").val();

    //     $(".born").text(dob);
    //     $(".color").text(favoriteColor);
    //     $("#info").show();
    //     //event.preventDefault();
    //     //Test
    //     // alert(dob);
    //     //$("#outputDate").text(dob);
    //     //$("#outputColor").text(favoriteColor);
    // });
});