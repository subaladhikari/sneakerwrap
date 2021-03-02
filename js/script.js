// Toggle menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate variable
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // Display burger menu
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");
// Toggle menu

// Hide menu
const navLink = document.querySelectorAll(".nav__link");

function navLinkHide() {
  const navMenu = document.getElementById("nav-menu");
  // Auto hide menu when clicked on a link
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", navLinkHide));
// Hide menu

// Scroll and activate color for each link
const sections = document.querySelectorAll("section[id]");

function activateOnScroll() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", activateOnScroll);
// Scroll and activate color for each link

// Header background on scroll
function scrollHeader() {
  const nav = document.getElementById("header");
  // scroll-header tag when scrolled above 200 viewport
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
// Header background on scroll

// Dark theme toggle
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Get current theme
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Theme action mechanism
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
// Dark theme toggle

// Animation on scroll
// Credit: I learned this from a YouTube video
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .product__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`,
  {
    interval: 200,
  }
);
// Animation on scroll
