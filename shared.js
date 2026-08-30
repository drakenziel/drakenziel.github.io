/*
 * shared.js — runs on every page.
 * Add <script src="shared.js"></script> before </body> on each page.
 *
 * What this file does:
 *   1. Adds a shadow to the navbar when the user scrolls down.
 *   2. Opens and closes the mobile hamburger menu.
 *   3. Marks the current page's nav link as active.
 */


/* ── 1. Navbar shadow on scroll ── */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    navbar.classList.add("is-scrolled");
  } else {
    navbar.classList.remove("is-scrolled");
  }
});


/* ── 2. Hamburger menu ── */
const hamburger  = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", function () {
  const isOpen = !mobileMenu.hidden;

  if (isOpen) {
    /* Close */
    mobileMenu.hidden            = true;
    mobileMenu.style.display     = "none";
    hamburger.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  } else {
    /* Open */
    mobileMenu.hidden            = false;
    mobileMenu.style.display     = "block";
    hamburger.classList.add("is-open");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden"; /* prevents page scrolling behind menu */
  }
});

/* Close mobile menu when the user taps a link */
mobileMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    mobileMenu.hidden            = true;
    mobileMenu.style.display     = "none";
    hamburger.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});


/* ── 3. Active nav link ──
   Gets the filename of the current page (e.g. "about.html")
   and adds the .is-active class to the matching link.         */
const currentFile = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".navbar__links a, .mobile-menu a").forEach(function (link) {
  const linkFile = link.getAttribute("href").split("/").pop();
  if (linkFile === currentFile) {
    link.classList.add("is-active");
  }
});
