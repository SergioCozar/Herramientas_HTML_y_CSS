document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".navbar__toggle");
  const closeButton = document.querySelector(".navbar__close-toggle");
  const menu = document.querySelector(".navbar__menu");

  toggleButton.addEventListener("click", () => {
    menu.classList.add("active");
    toggleButton.classList.add("navbar__toggle--hidden");
  });

  closeButton.addEventListener("click", () => {
    menu.classList.remove("active");
    toggleButton.classList.remove("navbar__toggle--hidden");
  });

  menu.querySelectorAll(".menu-item a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      toggleButton.classList.remove("navbar__toggle--hidden");
    });
  });
});
