$(document).ready(function() {

$("#hangman-links").hide()
$("#expressflix-links").hide()
$("#polytopia-links").hide()
$("#sip-links").hide()
$("#trivia-links").hide()
$("#chat2").hide()

//Event handler: mouseover on project images
$("#hangman-col").on("mouseover", function(){
    $("#hangman").attr("src","assets/images/blank.png")
    $("#hangman-links").show()
})

$("#hangman-col").on("mouseleave", function(){
    $("#hangman").attr("src","assets/images/hangman.png")
    $("#hangman-links").hide()
})

$("#expressflix-col").on("mouseover", function(){
    $("#expressflix").attr("src","assets/images/blank.png")
    $("#expressflix-links").show()
})

$("#expressflix-col").on("mouseleave", function(){
    $("#expressflix").attr("src","assets/images/expressflix.png")
    $("#expressflix-links").hide()
})

$("#polytopia-col").on("mouseover", function(){
    $("#polytopia").attr("src","assets/images/blank.png")
    $("#polytopia-links").show()
})

$("#polytopia-col").on("mouseleave", function(){
    $("#polytopia").attr("src","assets/images/polytopia.png")
    $("#polytopia-links").hide()
})

$("#sip-col").on("mouseover", function(){
    $("#sip").attr("src","assets/images/blank.png")
    $("#sip-links").show()
})

$("#sip-col").on("mouseleave", function(){
    $("#sip").attr("src","assets/images/sip.png")
    $("#sip-links").hide()
})

$("#trivia-col").on("mouseover", function(){
    $("#trivia").attr("src","assets/images/blank.png")
    $("#trivia-links").show()
})

$("#trivia-col").on("mouseleave", function(){
    $("#trivia").attr("src","assets/images/trivia.png")
    $("#trivia-links").hide()
})

$("#scroll-down2").on("click", function(){
    
    $('html,body').animate({
        scrollTop: $("#work2").offset().top},
        800);
});

//Event handler for when user clicks on mail icon
$(".mail-icon").on("click", function(){
    $("#chat2").show()
});

});