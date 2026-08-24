/* ==========================================
   MOBILE NAVIGATION
========================================== */

const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    navMenu.classList.toggle("active");

});

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");

        navMenu.classList.remove("active");

    });

});


/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});


/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.display = "block";

    }

    else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================
   ACTIVE NAVIGATION LINK
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

},

{

    threshold: 0.15

}

);

revealElements.forEach(element => {

    observer.observe(element);

});


/* ==========================================
   NAVBAR SHADOW
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 10px 25px rgba(0,0,0,.08)";

    }

    else {

        header.style.boxShadow =
            "none";

    }

});


/* ==========================================
   HERO TYPING EFFECT
========================================== */

const heroSubtitle = document.querySelector(".hero-subtitle");

const text = "Artificial Intelligence & Machine Learning Student";

let index = 0;

function typeText() {

    heroSubtitle.textContent = "";

    let typing = setInterval(() => {

        heroSubtitle.textContent += text.charAt(index);

        index++;

        if (index >= text.length) {

            clearInterval(typing);

        }

    }, 40);

}

window.addEventListener("load", typeText);


/* ==========================================
   SMOOTH SECTION SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ==========================================
   IMAGE HOVER EFFECT
========================================== */

const profileImage = document.querySelector(".hero-image img");

if (profileImage) {

    profileImage.addEventListener("mousemove", () => {

        profileImage.style.transform = "scale(1.05)";

    });

    profileImage.addEventListener("mouseleave", () => {

        profileImage.style.transform = "scale(1)";

    });

}


/* ==========================================
   PRELOADER (Optional)
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* ==========================================
   END
========================================== */