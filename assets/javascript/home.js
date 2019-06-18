$(document).ready(function() {

$("#about-me-link").hide()
$("#work-link").hide()
$("#scroll-arrow1").hide()
$("#scroll-arrow2").hide()
$("#background-image1").hide()
$("#background-image2").hide()

//Variable declarations
var cubeNumber = "";
var i = 0;
var txt = "< Hi, my name is Minori />"
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
        console.log("wtf")
        $("#cube-0, #cube-1, #cube-2, #cube-3").css({"transition" : "0.3s ease-out"});
        $("#cube-" + cubeNumber).animate({height: "350px", width: "350px", top: -175, bottom: -200}, 0);
    
        $("#cube-" + (parseFloat(cubeNumber)+1)).animate({height: "325px", width: "80px", top: -160, bottom: -200}, 0);
        $("#cube-" + (parseFloat(cubeNumber)-1)).animate({height: "325px", width: "80px", top: -160, bottom: -200}, 0);
    
        $("#cube-" + (parseFloat(cubeNumber)+2)).animate({height: "315px", width: "70px", top: -155, bottom: -200}, 0);
        $("#cube-" + (parseFloat(cubeNumber)-2)).animate({height: "315px", width: "70px", top: -155, bottom: -200}, 0);
    
        $("#cube-" + (parseFloat(cubeNumber)+3)).animate({width: "60px"}, 0)
        $("#cube-" + (parseFloat(cubeNumber)-3)).animate({width: "60px"}, 0)
    }
});

//Animate cube width on mouseover
$("#cube-1").on("mouseover",function(){
    console.log(cubeNumber)
    console.log(newPage)
    console.log(finishLoad)

    if (newPage != 1 && finishLoad != 0){

        $("#cube-0").css({"backgroundColor" : "#0101c5"});

        $("#cube-1").css({"backgroundColor" : "#0000ff"});
        $("#background-image1").show()

        $("#cube-2").css({"backgroundColor" : "#5a81ff"});
        $("#cube-3").css({"backgroundColor" : "#9fb9ff"});
    }
});

$("#cube-1").on("mouseleave",function(){
    $("#about-me-link").hide()
})

//Animate cube width on mouseover
$("#cube-2").on("mouseover",function(){
    console.log(cubeNumber)
    console.log(newPage)
    console.log(finishLoad)

    if (newPage != 1 && finishLoad != 0){

        $("#cube-0").css({"backgroundColor" : "#5f025f"},{queue: false});
        $("#cube-1").css({"backgroundColor" : "#a31ea3"},{queue: false});

        $("#cube-2").css({"backgroundColor" : "#f869f8"},{queue: false});
        $("#background-image2").show()

        $("#cube-3").css({"backgroundColor" : "#e995e9"},{queue: false});
    }
});

$("#cube-2").on("mouseleave",function(){
    $("#work-link").hide()
})

$("#cube-0").on("mouseleave",function(){
    $("#scroll-arrow1").hide()
})

$("#cube-3").on("mouseleave",function(){
    $("#scroll-arrow2").hide()
})


$("#cubez").on("mouseleave", function(){
    console.log("mouse left!")
    console.log(newPage)
    $("#about-me-link").hide()
    $("#work-link").hide()
    $("#background-image1").hide()
    $("#background-image2").hide()
    $("#scroll-arrow1").hide()
    $("#scroll-arrow2").hide()

    if (newPage != 1 && finishLoad != 0){

        $("#cube-0").animate({width: "80px", height: "300px", top: -150, bottom: -200}, 0);
        $("#cube-1").animate({width: "80px", height: "300px", top: -150, bottom: -200}, 0);
        $("#cube-2").animate({width: "80px", height: "300px", top: -150, bottom: -200}, 0);
        $("#cube-3").animate({width: "80px", height: "300px", top: -150, bottom: -200}, 0);

        $("#cube-0").css({"backgroundColor" : "#000000"});
        $("#cube-1").css({"backgroundColor" : "#1f1e1e"});
        $("#cube-2").css({"backgroundColor" : "#3b3b3b"});
        $("#cube-3").css({"backgroundColor" : "#535353"});
    }
});


//Animate text on cube-0 scroll arrow
$("#cube-0").on("mouseenter", function(){
    if (finishLoad != 0){
        setTimeout(function(){
            $("#scroll-arrow1").show()
            $("#scroll-arrow1").css({"color" : "grey"})
        }, 500)
    }

    $('#scroll-arrow1').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });
    
    anime.timeline({loop: true})
        .add({
        targets: '#scroll-arrow1 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: function(el, i) {
            return 500 + 30 * i;
        }
        }).add({
        targets: '#scroll-arrow1 .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: function(el, i) {
            return 100 + 30 * i;
        }
        });
});

//Animate text on cube-1 ABOUT ME
$("#cube-1").on("mouseenter", function(){
    if (finishLoad != 0){
        $("#about-me-link").show()
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


//Animate text on cube-2 WORK
$("#cube-2").on("mouseenter", function(){
    $("#work-link").show()

    if (finishLoad != 0){
        $("#work-link").show()
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

//Animate text on cube-3 scroll arrow
$("#cube-3").on("mouseenter", function(){
    if (finishLoad != 0){
        setTimeout(function(){
            $("#scroll-arrow2").show()
            $("#scroll-arrow2").css({"color" : "grey"})
        }, 500)
    }

    $('#scroll-arrow2').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });
    
    anime.timeline({loop: true})
        .add({
        targets: '#scroll-arrow2 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: function(el, i) {
            return 500 + 30 * i;
        }
        }).add({
        targets: '#scroll-arrow2 .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: function(el, i) {
            return 100 + 30 * i;
        }
        });
});

//Event handler on click (about me or work page)
$("#about-me-link").on("click", function(){
    $("#work-link").empty()
    $("#about-me-link").empty()
    $("#scroll-arrow1, #scroll-arrow2").empty()
    $("#background-image1").hide()
    $("#background-image2").hide()
   
    newPage = 1; 

    $("#cube-0").css({"backgroundColor" : "#000000"});
    $("#cube-1").css({"backgroundColor" : "#1f1e1e"});
    $("#cube-2").css({"backgroundColor" : "#3b3b3b"});
    $("#cube-3").css({"backgroundColor" : "#535353"});
    // $("#cube-0, #cube-1, #cube-2, #cube-3").css({"transition" : ""});

    $("#cube-0").animate({width: "80px", height: "300px", top: -150, bottom: -200}, {duration: 0});
    $("#cube-1").animate({width: "80px", height: "300px", top: -150, bottom: -200}, {duration: 0});
    $("#cube-2").animate({width: "80px", height: "300px", top: -150, bottom: -200}, {duration: 0});
    $("#cube-3").animate({width: "80px", height: "300px", top: -150, bottom: -200}, {duration: 0});

    setTimeout(function(){
        window.location.href = "about-me.html"
    }, 2000)
});

//Event handler on click (about me or work page)
$("#work-link").on("click", function(){
    $("#about-me-link").empty()
    $("#work-link").empty()
    $("#scroll-arrow1, #scroll-arrow2").empty()
    $("#background-image1").hide()
    $("#background-image2").hide()
    newPage = 1; 

    $("#cube-0").css({"backgroundColor" : "#000000"});
    $("#cube-1").css({"backgroundColor" : "#1f1e1e"});
    $("#cube-2").css({"backgroundColor" : "#3b3b3b"});
    $("#cube-3").css({"backgroundColor" : "#535353"});
    // $("#cube-0, #cube-1, #cube-2, #cube-3").css({"transition" : ""});


    $("#cube-0").animate({width: "80px", height: "300px", top: -150, bottom: -200}, {duration: 0});
    $("#cube-1").animate({width: "80px", height: "300px", top: -150, bottom: -200}, {duration: 0});
    $("#cube-2").animate({width: "80px", height: "300px", top: -150, bottom: -200}, {duration: 0});
    $("#cube-3").animate({width: "80px", height: "300px", top: -150, bottom: -200}, {duration: 0});


    setTimeout(function(){
        window.location.href = "work.html"
    }, 2000)
});

}); //END: document ready function