$(document).ready(function() {

$("#about-me-link").hide()
$("#work-link").hide()

//Variable declarations
var cubeNumber = "";
var i = 0;
var txt = "< Hi, my name is Minori >"
var speed = 70; 

//Function declarations


//Initial page line animation
$(".cube").css("height","2px")
$(".cube").css("width","1px")
$(".cube").css("margin-top","150px")
$(".cube").animate({width: "80px"}, 1000)

function typeWriter(){
    if (i<txt.length){
        document.getElementById("myName-column").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter,speed)
        console.log(i)
    }
};

setTimeout(function(){
    typeWriter()
    $("#myName-column").css("margin-top", "150px")
    $("#contact-row-index").css("margin-top", "50px")
    $(".cube").css("margin-top","0px")
}, 1000)

setTimeout(function(){
    $("#myName-column").text("")
}, 4300)

setTimeout(function(){
    $("#cube-0").animate({height: "300px", top: -150, bottom: -200}, 600);
    $("#cube-1").animate({height: "300px", top: -150, bottom: -200}, 800);
    $("#cube-2").animate({height: "300px", top: -150, bottom: -200}, 1000);
    $("#cube-3").animate({height: "300px", top: -150, bottom: -200}, 1200);
}, 4300)

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

$("#cubez").on("mouseleave", function(){
    console.log("mouse left!")
    $("#cube-0").animate({width: "80px"}, 400);
    $("#cube-1").animate({width: "80px"}, 400);
    $("#cube-2").animate({width: "80px"}, 400);
    $("#cube-3").animate({width: "80px"}, 400);

});

//Animate text on cube-1 ABOUT ME
$("#cube-1").on("mouseenter", function(){
    console.log("Hello")

    setTimeout(function(){
        $("#about-me-link").show()
    }, 500)

});

$("#cube-1").on("mouseleave", function(){
    $("#about-me-link").hide()
});


//Animate text on cube-1 WORK
$("#cube-2").on("mouseenter", function(){

    setTimeout(function(){
        $("#work-link").show()
    }, 500)

});

$("#cube-2").on("mouseleave", function(){
    $("#work-link").hide()
});

//Event handler on click (about me or work page)
$("#about-me-link, #work-link").on("click", function(){
    $("#work-link").hide()
    $("#about-me-link").hide()

    $("#cube-0").animate({height: "2px", bottom: -150, top: -100}, 500);
    $("#cube-1").animate({height: "2px", bottom: -150, top: -100}, 500);
    $("#cube-2").animate({height: "2px", bottom: -150, top: -100}, 500);
    $("#cube-3").animate({height: "2px", bottom: -150, top: -100}, 500);
    $(".cube").animate({"margin-top": "100px"}, 500);
});

}); //END: document ready function