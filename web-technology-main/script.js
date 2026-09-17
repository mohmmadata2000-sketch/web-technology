// Burger Menu

let burger = document.getElementById("burger");
let nav = document.getElementById("nav");

burger.addEventListener("click", function () {

    nav.classList.toggle("show");

});


// Contact Form

let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get values from user input

    let userName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;


    // Sanitize input

    function sanitize(text) {

        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    userName = sanitize(userName);
    userEmail = sanitize(userEmail);
    userMessage = sanitize(userMessage);


    // Store values for future use

    console.log("Name:", userName);
    console.log("Email:", userEmail);
    console.log("Message:", userMessage);


    // Show message

    document.getElementById("formMessage").textContent =
        "Your message has been received successfully!";


    contactForm.reset();

});


// Visitor Counter

let visitors = localStorage.getItem("visitors");

if (visitors === null) {

    visitors = 1;

} else {

    visitors = Number(visitors) + 1;

}

localStorage.setItem("visitors", visitors);

document.getElementById("visitorCount").textContent = visitors;


// W3Schools Slideshow

let slideIndex = 1;

showSlides(slideIndex);


function plusSlides(n) {

    showSlides(slideIndex += n);

}


function currentSlide(n) {

    showSlides(slideIndex = n);

}


function showSlides(n) {

    let i;

    let slides =
        document.getElementsByClassName("mySlides");

    let dots =
        document.getElementsByClassName("dot");


    if (n > slides.length) {

        slideIndex = 1;

    }


    if (n < 1) {

        slideIndex = slides.length;

    }


    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";

    }


    for (i = 0; i < dots.length; i++) {

        dots[i].className =
            dots[i].className.replace(" active", "");

    }


    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " active";

}