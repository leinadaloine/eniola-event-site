// MOBILE NAVIGATION

const hamburger = document.getElementById("hamburger");

const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const icon = hamburger.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.replace("fa-bars", "fa-xmark");

    } else {

        icon.classList.replace("fa-xmark", "fa-bars");

    }

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        hamburger.querySelector("i").classList.replace(
            "fa-xmark",
            "fa-bars"
        );

    });

});


// BOOKING FORM

const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const eventType = document.getElementById("event-type").value;

    const date = document.getElementById("date").value;

    const message = document.getElementById("message").value;

    const phoneNumber = "2348000000000";

    const whatsappMessage = `
Hello Elevate Events!

I would like to make an event booking.

Name: ${name}

Email: ${email}

Event Type: ${eventType}

Event Date: ${date}

Additional Details: ${message}
    `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

});


// PREVENT PAST EVENT DATES

const dateInput = document.getElementById("date");

dateInput.min = new Date().toISOString().split("T")[0];