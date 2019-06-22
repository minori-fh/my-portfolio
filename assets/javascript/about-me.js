$(document).ready(function() {
$("#chat3").hide()
$("#about-me2").hide()

$("#home1, #whereIComeFrom").on("mouseover", function(){
    $(this).addClass("rotate-vert-center")
});

$("#home1, #whereIComeFrom").on("mouseleave", function(){
    $(this).removeClass("rotate-vert-center")
});

$("#scroll-down1").on("click", function(){
    $("#about-me2").show()
    
    $('html,body').animate({
        scrollTop: $("#about-me2").offset().top},
        800);
});

//Event handler for when user clicks on mail icon
$(".mail-icon").on("click", function(){
    $("#chat3").show()
});

}) //END: document ready function