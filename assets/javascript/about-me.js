$(document).ready(function() {
$("#chat3").hide()

var codingHrs = 0;
var coffeeCups = 0;
var intervalID; 

function typeCoder(){
    if (codingHrs < 400){
        codingHrs++
        $("#coding-hrs").text(" " + codingHrs + " hrs.")
    }
};

function typeCoffee(){
    if (coffeeCups < 100){
        coffeeCups++
        $("#coffee-cups").text(" " + coffeeCups + " cups")
    }
};

function countCode(){
    intervalID = setInterval(typeCoder,20)
};

function countCoffee(){
    intervalID = setInterval(typeCoffee, 50)
}

$("#home1, #whereIComeFrom").on("mouseover", function(){
    $(this).addClass("rotate-vert-center")
});

$("#home1, #whereIComeFrom").on("mouseleave", function(){
    $(this).removeClass("rotate-vert-center")
});

$("#scroll-down1").on("click", function(){
    countCode()
    countCoffee()

    $('html,body').animate({
        scrollTop: $("#about-me2").offset().top},
        800); 
});

//Event handler for when user clicks on mail icon
$(".mail-icon").on("click", function(){
    $("#chat3").show()
});

}) //END: document ready function