const exploreButton = document.querySelector(".hero button");
const contactForm = document.querySelector("form");

exploreButton.addEventListener("click", function () {
    alert("Welcome! Thanks for visiting my website.");
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();
});