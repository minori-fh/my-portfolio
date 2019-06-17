$(document).ready(function() {

$("#about-me-link").hide()
$("#work-link").hide()

//Variable declarations
var cubeNumber = "";
var i = 0;
var txt = "< Hi, my name is Minori >"
var speed = 70; 
var newPage = 0; 
var finishLoad = 0;

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
    finishLoad = 1;
}, 4300)

//Animate cube width on mouseover
$(".cube").on("mouseover",function(){
    cubeNumber = $(this).attr("cube-value")
    console.log(cubeNumber)
    console.log(newPage)
    console.log(finishLoad)

    if (newPage != 1 && finishLoad != 0){
        $("#cube-" + cubeNumber).animate({height: "350px", width: "350px", top: -175, bottom: -200}, 300);
    
        $("#cube-" + (parseFloat(cubeNumber)+1)).animate({height: "325px", width: "80px", top: -160, bottom: -200}, 300);
        $("#cube-" + (parseFloat(cubeNumber)-1)).animate({height: "325px", width: "80px", top: -160, bottom: -200}, 300);
    
        $("#cube-" + (parseFloat(cubeNumber)+2)).animate({height: "315px", width: "70px", top: -155, bottom: -200}, 300);
        $("#cube-" + (parseFloat(cubeNumber)-2)).animate({height: "315px", width: "70px", top: -155, bottom: -200}, 300);
    
        $("#cube-" + (parseFloat(cubeNumber)+3)).animate({width: "60px"}, 300)
        $("#cube-" + (parseFloat(cubeNumber)-3)).animate({width: "60px"}, 300)
    }
});

$("#cubez").on("mouseleave", function(){
    console.log("mouse left!")
    console.log(newPage)
    $("#about-me-link").hide()
    $("#work-link").hide()

    if (newPage != 1 && finishLoad != 0){
        $("#cube-0").animate({width: "80px", height: "300px", top: -150, bottom: -200}, 400);
        $("#cube-1").animate({width: "80px", height: "300px", top: -150, bottom: -200}, 400);
        $("#cube-2").animate({width: "80px", height: "300px", top: -150, bottom: -200}, 400);
        $("#cube-3").animate({width: "80px", height: "300px", top: -150, bottom: -200}, 400);
    }

});

//Animate text on cube-1 ABOUT ME
$("#cube-1").on("mouseenter", function(){
    if (finishLoad != 0){
        setTimeout(function(){
            $("#about-me-link").show()
        }, 500)
    }
    
    // Wrap every letter in a span
    $('#about-me-link').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });
    
    anime.timeline({loop: true})
        .add({
        targets: '#about-me-link .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: function(el, i) {
            return 500 + 30 * i;
        }
        }).add({
        targets: '#about-me-link .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: function(el, i) {
            return 100 + 30 * i;
        }
        });
});

$("#cube-1").on("mouseleave", function(){
    $("#about-me-link").hide()
});


//Animate text on cube-1 WORK
$("#cube-2").on("mouseenter", function(){

    if (finishLoad != 0){
        setTimeout(function(){
            $("#work-link").show()
        }, 500)
    }

    $('#work-link').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });
    
    anime.timeline({loop: true})
        .add({
        targets: '#work-link .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: function(el, i) {
            return 500 + 30 * i;
        }
        }).add({
        targets: '#work-link .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: function(el, i) {
            return 100 + 30 * i;
        }
        });
});

$("#cube-2").on("mouseleave", function(){
    $("#work-link").hide()
});

//Event handler on click (about me or work page)
$("#about-me-link").on("click", function(){
    $("#work-link").empty()
    $("#about-me-link").empty()
    newPage = 1; 

    $(".cube").animate({"margin-top": "200px"}, {duration: 400, queue: false});
    $("#cube-0").animate({height: "2px", bottom: -150, top: -200}, {duration: 400, queue: false});
    $("#cube-1").animate({height: "2px", bottom: -150, top: -200}, {duration: 400, queue: false});
    $("#cube-2").animate({height: "2px", bottom: -150, top: -200}, {duration: 400, queue: false});
    $("#cube-3").animate({height: "2px", bottom: -150, top: -200}, {duration: 400, queue: false});

    setTimeout(function(){
        window.location.href = "about-me.html"
    }, 3000)
});

//Event handler on click (about me or work page)
$("#work-link").on("click", function(){
    $("#about-me-link").empty()
    $("#work-link").empty()
    newPage = 1; 

    $(".cube").animate({"margin-top": "200px"}, {duration: 400, queue: false});
    $("#cube-0").animate({height: "2px", bottom: -150, top: -200}, {duration: 400, queue: false});
    $("#cube-1").animate({height: "2px", bottom: -150, top: -200}, {duration: 400, queue: false});
    $("#cube-2").animate({height: "2px", bottom: -150, top: -200}, {duration: 400, queue: false});
    $("#cube-3").animate({height: "2px", bottom: -150, top: -200}, {duration: 400, queue: false});

    setTimeout(function(){
        window.location.href = "work.html"
    }, 3000)
});

}); //END: document ready function