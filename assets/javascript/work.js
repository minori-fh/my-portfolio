$(document).ready(function() {

$("#work2").hide()

// Event handler: mouseover and mouseleave to add rotate class
// $(".tech-icon").addClass("rotate-vert-center")
// setTimeout(function(){
//     $(".tech-icon").removeClass("rotate-vert-center")
// }, 700)

// $(".tech-icon").on("mouseover", function(){
//     $(this).addClass("rotate-vert-center")
//     setTimeout(function(){
//         $(".tech-icon").removeClass("rotate-vert-center")
//     }, 700)
// })

$("#scroll-down2").on("click", function(){
    $("#work2").show()

    $('html,body').animate({
        scrollTop: $("#work2").offset().top},
        800);
});

//Event handler for when user clicks on mail icon
$(".mail-icon").on("click", function(){

    $("#chat2").html("<p> Let's chat minori.fh@gmail.com </p>")
   
});

});