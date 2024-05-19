// Get the button
let mybutton = document.getElementById("TopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";

    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Enables smooth scroll
    });
});