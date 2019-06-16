$(document).ready(function() {

$("#hangman-links").hide()
$("#expressflix-links").hide()
$("#polytopia-links").hide()
$("#sip-links").hide()
$("#trivia-links").hide()


//Variable declarations
var cubeNumber = "";

//Function declarations


//Initial page line animation
$(".cube").css("height","2px")
$(".cube").css("width","1px")
$(".cube").animate({width: "80px"}, 1000)


setTimeout(function(){
    $("#myName-column").text("Hi, my name is Minori.")
}, 1000)

setTimeout(function(){
    $("#myName-column").text("")
}, 3000)

setTimeout(function(){
    $("#cube-0").animate({height: "300px"}, 700)
    $("#cube-1").animate({height: "300px"}, 850)
    $("#cube-2").animate({height: "300px"}, 1000)
    $("#cube-3").animate({height: "300px"}, 1150)
}, 3000)

//Animate cube width on mouseover
$(".cube").on("mouseover",function(){
    cubeNumber = $(this).attr("cube-value")
    console.log(cubeNumber)

        $("#cube-" + cubeNumber).animate({width: "300px"}, 500)
        $("#cube-" + (parseFloat(cubeNumber)+1)).animate({width: "80px"}, 500)
        $("#cube-" + (parseFloat(cubeNumber)-1)).animate({width: "80px"}, 500)
        $("#cube-" + (parseFloat(cubeNumber)+2)).animate({width: "70px"}, 500)
        $("#cube-" + (parseFloat(cubeNumber)-2)).animate({width: "70px"}, 500)
        $("#cube-" + (parseFloat(cubeNumber)+3)).animate({width: "60px"}, 500)
        $("#cube-" + (parseFloat(cubeNumber)-3)).animate({width: "60px"}, 500)
        $("#cube-" + (parseFloat(cubeNumber)+4)).animate({width: "50px"}, 500)
        $("#cube-" + (parseFloat(cubeNumber)-4)).animate({width: "50px"}, 500)
});

//Animate text on cube-1 ABOUT ME
$("#cube-1").on("mouseover", function(){

    setTimeout(function(){
        $("#cube-1").html("<a href='about-me.html'> ABOUT ME </a>")
        $("#cube-1").css("justify-content", "center")
    }, 500)

});

$("#cube-1").on("mouseleave", function(){
    $("#cube-1").html("")
});


//Animate text on cube-1 WORK
$("#cube-2").on("mouseover", function(){

    setTimeout(function(){
        $("#cube-2").html("<a href='work.html'> WORK </a>")
        $("#cube-2").css("justify-content", "center")
    }, 500)

});

$("#cube-2").on("mouseleave", function(){
    $("#cube-2").html("")
});

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

}); //END: document ready function