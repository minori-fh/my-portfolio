$(document).ready(function() {
$("#about-me2").hide()

var codingHrs = 0;
var coffeeCups = 0;

function typeCoder(){
    if (codingHrs < 400){
        codingHrs++
        $("#coding-hrs").text("  " + codingHrs + " hrs.")
    }
};

function typeCoffee(){
    if (coffeeCups < 100){
        coffeeCups++
        $("#coffee-cups").text("  " + coffeeCups + " cups")
    }
};

function countCode(){
    intervalID = setInterval(typeCoder,20)
};

function countCoffee(){
    intervalID = setInterval(typeCoffee, 50)
}

$("#scroll-down1").on("click", function(){
    countCode()
    countCoffee()
    $("#about-me2").show()

    $('html,body').animate({
        scrollTop: $("#about-me2").offset().top},
        800); 
});

//Event handler for when user clicks on mail icon
$(".mail-icon").on("click", function(){
    $("#chat3").html("<p> Let's chat minori.fh@gmail.com </p>")
});

$(".menu-home").on("mouseover", function(){
    $(".home-icon-label").text("GO HOME")
    $(this).animate({width: "60px"}, 300);
});

$(".menu-home").on("mouseleave", function(){
    $(".home-icon-label").text("")
    $(this).animate({width: "40px"}, 100);
});

$(".menu-about").on("mouseover", function(){
    $(".about-icon-label").text("ABOUT ME")
    $(this).animate({width: "60px"}, 300);
});

$(".menu-about").on("mouseleave", function(){
    $(".about-icon-label").text("")
    $(this).animate({width: "40px"}, 100);
});

$(".menu-work").on("mouseover", function(){
    $(".work-icon-label").text("SEE WORK")
    $(this).animate({width: "60px"}, 300);
});

$(".menu-work").on("mouseleave", function(){
    $(".work-icon-label").text("")
    $(this).animate({width: "40px"}, 100);
});

// VARIABLES
const magicalUnderlines = Array.from(document.querySelectorAll('.underline-magical'));

const gradientAPI = 'https://gist.githubusercontent.com/wking-io/3e116c0e5675c8bcad8b5a6dc6ca5344/raw/4e783ce3ad0bcd98811c6531e40256b8feeb8fc8/gradient.json';

// HELPER FUNCTIONS

// 1. Get random number in range. Used to get random index from array.
const randNumInRange = max => Math.floor(Math.random() * (max - 1));

// 2. Merge two separate array values at the same index to 
// be the same value in new array.
const mergeArrays = (arrOne, arrTwo) => arrOne
  .map((item, i) => `${item} ${arrTwo[i]}`)
  .join(', ');

// 3. Curried function to add a background to array of elms
const addBackground = (elms) => (color) => {
  elms.forEach(el => {
    el.style.backgroundImage = color;
  });
}
// 4. Function to get data from API
const getData = async(url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
}

// 5. Partial Application of addBackground to always apply 
// background to the magicalUnderlines constant
const addBackgroundToUnderlines = addBackground(magicalUnderlines);

// GRADIENT FUNCTIONS

// 1. Build CSS formatted linear-gradient from API data
const buildGradient = (obj) => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;

// 2. Get single gradient from data pulled in array and
// apply single gradient to a callback function
const applyGradient = async(url, callback) => {
  const data = await getData(url);
  const gradient = buildGradient(data[randNumInRange(data.length)]);
  callback(gradient);
}

// RESULT
applyGradient(gradientAPI, addBackgroundToUnderlines);

}) //END: document ready function