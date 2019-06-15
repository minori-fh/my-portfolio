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



}); //END: document ready function