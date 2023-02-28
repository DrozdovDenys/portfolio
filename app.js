  // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => scrollFunction();

function scrollFunction() {
  if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scroll({
    top: 0,
    behavior: "smooth"
  }) // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}