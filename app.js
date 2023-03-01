// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => scrollFunction();

function scrollFunction() {
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scroll({
    top: 0,
    behavior: "smooth",
  }); // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// hover for Mobile Devices
// let projects = document.querySelector(".project-container");
// let faBrands = document.querySelectorAll(".fa-brands");
// let a = document.querySelectorAll("a");
// let myBtn = document.getElementById("myBtn");
// let liveBtns = document.querySelectorAll(".live");
// let sourceBtns = document.querySelectorAll(".source");

// projects.addEventListener("touchstart", (e) => cardHover(e, 'cardHover'));
// projects.addEventListener("touchend", (e) => endOfCardHover(e, 'cardHover'));


// let hover = (e, className) => {
//   e.target.classList.add(className);
// };

// let endOfHover = (e, className) => {
//   e.target.classList.remove(className);
// };

// let cardHover = (e, className) => {
//   e.target.closest('.project-card').classList.add(className);
// };

// let endOfCardHover = (e, className) => {
//   e.target.closest('.project-card').classList.remove(className);
// };


// faBrands.forEach((faBrand) => {
//   faBrand.addEventListener("touchstart", (e) => hover(e, 'brandsHover'));
//   faBrand.addEventListener("touchend", (e) => endOfHover(e, 'brandsHover'));
// });

// a.forEach((link) => {
//   link.addEventListener("touchstart", (e) => hover(e, 'aHover'));
//   link.addEventListener("touchend", (e) => endOfHover(e, 'aHover'));
// });


// myBtn.addEventListener("touchstart", (e) => hover(e, 'myBtnHover'));
// myBtn.addEventListener("touchmove", (e) => endOfHover(e, 'myBtnHover'));

// liveBtns.forEach((btn) => {
//   btn.addEventListener("touchstart", (e) => hover(e, 'liveBtnHover'));
//   btn.addEventListener("touchend", (e) => endOfHover(e, 'liveBtnHover'));
// });

// sourceBtns.forEach((btn) => {
//   btn.addEventListener("touchstart", (e) => hover(e, 'sourceBtnHover'));
//   btn.addEventListener("touchend", (e) => endOfHover(e, 'sourceBtnHover'));
// });