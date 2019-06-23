$(document).ready(function() {
$("#chat3").hide()
$("#about-me2").hide()

var codingHrs = 0;
var coffeeCups = 0;

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
    $("#about-me2").show()

    $('html,body').animate({
        scrollTop: $("#about-me2").offset().top},
        800); 
});

//Event handler for when user clicks on mail icon
$(".mail-icon").on("click", function(){
    $("#chat3").show()
});

$(".menu-home").on("mouseover", function(){
    $(".home-icon-label").text("GO HOME")
    $(this).animate({width: "80px"}, 300);
});

$(".menu-home").on("mouseleave", function(){
    $(".home-icon-label").text("")
    $(this).animate({width: "40px"}, 100);
});

$(".menu-work").on("mouseover", function(){
    $(".work-icon-label").text("SEE WORK")
    $(this).animate({width: "80px"}, 300);
});

$(".menu-work").on("mouseleave", function(){
    $(".work-icon-label").text("")
    $(this).animate({width: "40px"}, 100);
});

$(".menu-about").on("mouseover", function(){
    $(".about-icon-label").text("ABOUT ME")
    $(this).animate({width: "80px"}, 300);
});

$(".menu-about").on("mouseleave", function(){
    $(".about-icon-label").text("")
    $(this).animate({width: "40px"}, 100);
});



}) //END: document ready function