// =====================================================
// MAURICE ODHIAMBO PORTFOLIO
// =====================================================


// Confirm that JavaScript is working

console.log("Maurice Odhiambo Portfolio loaded successfully.");


// =====================================================
// SMOOTH NAVIGATION
// =====================================================

const navigationLinks = document.querySelectorAll(
    'a[href^="#"]'
);

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =====================================================
// NAVIGATION ACTIVE STATE
// =====================================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(function (link) {

        link.style.color = "";

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.style.color = "#b8ff3d";

        }

    });

});