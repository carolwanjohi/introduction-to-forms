$(document).ready(function(){
    // Select Boxes
    $("form#selectBoxes1").submit(function(event){
        event.preventDefault();
        //Read selected value
        var beverage = $("#beverage1").val();
        //Test
        // alert(beverage);
        $("#outputSelectBoxes1").text(beverage);
    });

    // Select Boxes with Values
    $("form#selectBoxes2").submit(function(event){
        event.preventDefault();
        //Read selected value as string
        var beverage1 = $("#beverage2").val();
        //Read selected value as integer
        //var beverage2 = parseInt($("#beverage2").val());
        //Test
        //alert(beverage2);
        $("#outputSelectBoxes2").text(beverage1);
    });

    // Radio Buttons
    $("form#radioButtons").submit(function(event){
        event.preventDefault();
        //Read selected option
        var flavor = $("input:radio[name=flavor]:checked").val();
        //Test
        // alert(flavor);
        $("#outputRadioButtons").text(flavor);
    });

    // Date
    $("form#dateForm").submit(function(event){       
        event.preventDefault();
        //Read use input
        var dob = $("#born").val();
        var favoriteColor = $("#color").val();

        $(".born").text(dob);
        $(".color").text(favoriteColor);
        $("#info").show();
        //event.preventDefault();
        //Test
        // alert(dob);
        //$("#outputDate").text(dob);
        //$("#outputColor").text(favoriteColor);
    });
});