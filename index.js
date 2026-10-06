document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const navMenu = document.querySelector("nav ul");
  const navLinks = document.querySelectorAll("nav ul li a");

  const hamburger = document.createElement("div");
  hamburger.classList.add("hamburger");

  for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    hamburger.appendChild(span);
  }

  nav.insertBefore(hamburger, navMenu);

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
});
