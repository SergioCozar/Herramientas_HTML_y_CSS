document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".navbar__toggle"),t=document.querySelector(".navbar__close-toggle"),n=document.querySelector(".navbar__menu"),a=n.querySelectorAll(".menu-item a"),c=function(e){var t=new URL(e).pathname;return"/"===t?"/index.html":t},i=c(window.location.href);e.addEventListener("click",function(){n.classList.add("active"),e.classList.add("navbar__toggle--hidden")}),t.addEventListener("click",function(){n.classList.remove("active"),e.classList.remove("navbar__toggle--hidden")}),a.forEach(function(t){t.addEventListener("click",function(){n.classList.remove("active"),e.classList.remove("navbar__toggle--hidden")}),c(t.href)===i&&t.parentElement.classList.add("menu-item--active")})});
//# sourceMappingURL=index.93791d43.js.map
