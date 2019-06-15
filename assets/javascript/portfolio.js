$(document).ready(function() {


//Variable declarations

//Function declarations


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
        $("#cube-1").html("<a href='aboutMe.html'> ABOUT ME </a>")
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



}); //END: document ready function