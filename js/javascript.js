let section = document.querySelector(".skillsUses");
let spans = document.querySelectorAll(".progress span");
const up = document.querySelector(".to_top");
const theme_btn = document.getElementsByClassName("switch");
const edit_btn = document.getElementsByClassName("edit-btn");
const body = document.getElementsByTagName("body");
const subNav = document.getElementsByClassName("sidenav");
const popclose = document.getElementsByClassName("popup");
// -------------------------------------------------------------------------------------------------------------------------
// here i saved the first function into a [method1] var,
// first function to show and hide the "to top" button.
function method1(event){
    if (this.scrollY >= 350) {
        up.classList.add("show");
    } else {
        up.classList.remove("show");
    }
};
// where to go and the behavior
up.onclick = function () {
    window.scrollTo({
        top : 0,
        behavior:"smooth",
    });
}
// -------------------------------------------------------------------------------------------------------------------------
// here i saved the secound function into a [method2] var,
// secound function to activate the progress bars.
function method2(event){
    if (window.scrollY >= section.offsetTop - 10) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    } else {
        spans.forEach((span) => {
            span.style.width = 0;
        })
    }
}
// -------------------------------------------------------------------------------------------------------------------------
// here i called the first and the secound function [method1]+[method2] into a "Onscroll" event,
window.onscroll = function (event){
    method1(event);
    method2(event);
}
// -------------------------------------------------------------------------------------------------------------------------  
// here i used jQuery to toggleClass for the main body for dark or light theme
var togglee= $(document).ready(function(){
    $(theme_btn).click(function(){
        $("body").toggleClass("light");
    });
});
// __________________________________________________________________________________The End______________________________________________________________________________

let write = document.getElementById("typeWriter");
let myName = 'Youssef Mohamed';
let myTitle = 'Full Stack MERN Developer';
let i = 0;
var speed = 150;

function typeWriter(name) {
    if (i < myTitle.length) {
        write.innerHTML += myTitle.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
window.onload = typeWriter();
// -----------------------------------------------------------
function openNav() {
    $(subNav).toggleClass("active");
}
// -----------------------------------------------------------
function toggleNav() {
    $(edit_btn).toggleClass("active");
}
// ------------------------------------------------
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
    }
}
// ---------------------------------------------------------------
// to be function...JQery
$("p.tobe").delay(4800).queue(function(next){
    $(this).attr("class", "tobe active");
    next();
});
// slide in fron top pop up to say this website is under constraction JQery
$("div.popup").delay(8000).queue(function(next){
    $(this).attr("class", "popup active");
    next();
});
// ----------------------------------------------------------------
function closepop(){
    $(popclose).toggleClass("active");
}