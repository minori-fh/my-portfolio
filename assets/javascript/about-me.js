$(document).ready(function() {

$("#about-me2").hide();

$("#home1, #whereIComeFrom").on("mouseover", function(){
    $(this).addClass("rotate-vert-center")
});

$("#home1, #whereIComeFrom").on("mouseleave", function(){
    $(this).removeClass("rotate-vert-center")
});

$("#scroll-down1").on("click", function(){
    $("#about-me2").show();
    
    $('html,body').animate({
        scrollTop: $("#about-me2").offset().top},
        800);
});
}) //END: document ready function