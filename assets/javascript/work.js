$(document).ready(function() {

$("#hangman-links").hide()
$("#expressflix-links").hide()
$("#polytopia-links").hide()
$("#sip-links").hide()
$("#trivia-links").hide()
$("#liri-links").hide()
$("#chat2").hide()
$("#work2").hide()

// Event handler: mouseover and mouseleave to add rotate class
$(".tech-icon").addClass("rotate-vert-center")
setTimeout(function(){
    $(".tech-icon").removeClass("rotate-vert-center")
}, 700)

$(".tech-icon").on("mouseover", function(){
    $(this).addClass("rotate-vert-center")
    setTimeout(function(){
        $(".tech-icon").removeClass("rotate-vert-center")
    }, 700)
})

//Event handler: mouseover on project images
$("#hangman-col").on("mouseover", function(){
    $("#hangman").attr("src","assets/images/project-pictures/blank.png")
    $("#hangman-links").show()
})

$("#hangman-col").on("mouseleave", function(){
    $("#hangman").attr("src","assets/images/project-pictures/hangman.png")
    $("#hangman-links").hide()
})

$("#expressflix-col").on("mouseover", function(){
    $("#expressflix").attr("src","assets/images/project-pictures/blank.png")
    $("#expressflix-links").show()
})

$("#expressflix-col").on("mouseleave", function(){
    $("#expressflix").attr("src","assets/images/project-pictures/expressflix.png")
    $("#expressflix-links").hide()
})

$("#polytopia-col").on("mouseover", function(){
    $("#polytopia").attr("src","assets/images/project-pictures/blank.png")
    $("#polytopia-links").show()
})

$("#polytopia-col").on("mouseleave", function(){
    $("#polytopia").attr("src","assets/images/project-pictures/polytopia.png")
    $("#polytopia-links").hide()
})

$("#sip-col").on("mouseover", function(){
    $("#sip").attr("src","assets/images/project-pictures/blank.png")
    $("#sip-links").show()
})

$("#sip-col").on("mouseleave", function(){
    $("#sip").attr("src","assets/images/project-pictures/sip.png")
    $("#sip-links").hide()
})

$("#trivia-col").on("mouseover", function(){
    $("#trivia").attr("src","assets/images/project-pictures/blank.png")
    $("#trivia-links").show()
})

$("#trivia-col").on("mouseleave", function(){
    $("#trivia").attr("src","assets/images/project-pictures/trivia.png")
    $("#trivia-links").hide()
})

$("#liri-col").on("mouseover", function(){
    $("#liri").attr("src","assets/images/project-pictures/blank.png")
    $("#liri-links").show()
})

$("#liri-col").on("mouseleave", function(){
    $("#liri").attr("src","assets/images/project-pictures/liri.png")
    $("#liri-links").hide()
})


$("#scroll-down2").on("click", function(){
    $("#work2").show()

    $('html,body').animate({
        scrollTop: $("#work2").offset().top},
        800);
});

//Event handler for when user clicks on mail icon
$(".mail-icon").on("click", function(){
    $("#chat2").show()
});

});