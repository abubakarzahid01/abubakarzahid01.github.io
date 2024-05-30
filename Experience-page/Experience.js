
// JavaScript to handle click events on thumbnails and display detailed information

document.addEventListener("DOMContentLoaded", function() {
    const imageGallery = document.getElementById("imageGallery");
    const highlightInfo = document.getElementById("highlightInfo");
  
    imageGallery.addEventListener("click", function(event) {
        const target = event.target;
        if (target.tagName === "IMG") {
            const info = target.getAttribute("data-info");
            displayHighlightInfo(info);
        }
    });
  
    function displayHighlightInfo(info) {
        highlightInfo.innerHTML = `
            <h2>Experience Highlights</h2>
            <div class="info-content">
                <p>${info}</p>
            </div>
        `;
    }
  });
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = menuBtn.querySelector("i");
  
  menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
  
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });
  
  navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
  
  const headerImage = document.querySelector(".header__image");
  headerImage.addEventListener(
    "animationend",
    (e) => {
      setTimeout(() => {
        headerImage.classList.add("reveal");
      });
    },
    { once: true }
  );
  
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1500,
  });
  ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 2000,
  });
  ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 2500,
  });
  ScrollReveal().reveal(".header__content div", {
    ...scrollRevealOption,
    delay: 3000,
  });
  
  ScrollReveal().reveal(".header .nav__links", {
    delay: 3500,
  });