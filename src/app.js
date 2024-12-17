import "animate.css";

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".navbar__toggle");
  const closeButton = document.querySelector(".navbar__close-toggle");
  const menu = document.querySelector(".navbar__menu");
  const menuItems = menu.querySelectorAll(".menu-item a");

  const getLastPathSegment = (url) => {
    const path = new URL(url).pathname;
    return path === "/" ? "/index.html" : path;
  };

  const currentPath = getLastPathSegment(window.location.href);

  toggleButton.addEventListener("click", () => {
    menu.classList.add("active");
    toggleButton.classList.add("navbar__toggle--hidden");
  });

  closeButton.addEventListener("click", () => {
    menu.classList.remove("active");
    toggleButton.classList.remove("navbar__toggle--hidden");
  });

  menuItems.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      toggleButton.classList.remove("navbar__toggle--hidden");
    });

    if (getLastPathSegment(link.href) === currentPath) {
      link.parentElement.classList.add("menu-item--active");
    }
  });
});
