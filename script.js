
// =========================
// MOBILE MENU
// =========================

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");


// 3 line button par click
menuButton.addEventListener("click", function () {

    mobileMenu.classList.toggle("active");

});


// Mobile menu ke links click hone par menu close
const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

    });

});


// =========================
// FAQ
// =========================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const currentItem = question.parentElement;

        document.querySelectorAll(".faq-item").forEach(function (item) {

            if (item !== currentItem) {
                item.classList.remove("active");
            }

        });

        currentItem.classList.toggle("active");

    });

});


// =========================
// COURSE WHATSAPP
// =========================

const courseButtons = document.querySelectorAll(".course-button");

courseButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const course = button.getAttribute("data-course");

        const message =
            `Assalamualaikum, mera naam ___ hai. Mujhe ${course} karna hai. Hame iske regarding aap aur details bataa dijiyega.`;

        const whatsappURL =
            "https://wa.me/917028185852?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank");

    });

});


// =========================
// SCROLL TOP
// =========================

const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});


scrollTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});