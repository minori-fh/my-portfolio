$(document).ready(function() {

$("#home1, #whereIComeFrom").on("mouseover", function(){
    $(this).addClass("rotate-vert-center")
});

$("#home1, #whereIComeFrom").on("mouseleave", function(){
    $(this).removeClass("rotate-vert-center")
});

$("#scroll-down1").on("click", function(){
    
    $('html,body').animate({
        scrollTop: $("#about-me2").offset().top},
        800);
});
}) //END: document ready function