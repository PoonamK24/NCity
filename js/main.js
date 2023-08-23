/*var countDownDate = new Date("Aug 31, 2023 15:37:25").getTime();
 
var x = setInterval(function() {
 
  var now = new Date().getTime();
 
  var distance = countDownDate - now;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  document.getElementById("days").innerHTML = days + " days ";
  document.getElementById("hours").innerHTML = hours + " hours ";
  document.getElementById("minutes").innerHTML = minutes + " minutes ";
  document.getElementById("seconds").innerHTML = seconds + " seconds ";
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); */


function openForm() {
  document.getElementById("popupform").style.display = "block";
}

function closeForm() {
  document.getElementById("popupform").style.display = "none";
}


let popup = document.getElementById("successpopup");

function openPopup(){
  popup.classList.add(".open-popup");
}

function closePopup(){
  popup.classList.remove(".open-popup");
}

var form = document.getElementById("popupform");
form.addEventListener("submit", onSubmitForm);

function onSubmitForm(e) {
    e.preventDefault();
    $('#formModal').modal('hide');
    $('#btnStart').hide();
    $('#message').show();
}

function showPopUp(){
	my_popup.style.display="block";
}

function hidePopUp(){
	my_popup.style.display="none";
}

function showPopUp(){
	my_popup.style.display="block";
}

function ClosePopUp(){
	my_popup.style.display="none";
}
setInterval(showPopUp,1000);

/*function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}*/

/*const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());*/

const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);