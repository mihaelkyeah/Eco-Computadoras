"use strict";

// === GLOBAL VARIABLES ===
// Get relative location
let loc = window.location.pathname;
var currentDirectory = loc.substring(0, loc.lastIndexOf('/'));

// === NAVIGATION ===

    document.querySelector("#nav-home").addEventListener("click", () => {
        loadPage(document.querySelector("#nav-home"));
    });
    document.querySelector("#nav-computadoras").addEventListener("click", () => {
        loadPage(document.querySelector("#nav-computadoras"));
    });
    document.querySelector("#nav-soporte").addEventListener("click", () => {
        loadPage(document.querySelector("#nav-soporte"));
    });
    document.querySelector("#nav-contacto").addEventListener("click", () => {
        loadPage(document.querySelector("#nav-contacto"));
    });

    function loadPage(navItem) {
        if(!navItem.classList.contains("active")) {
            window.location = navItem.getAttribute("data-page")+".html";
        }
    }

// ... END NAVIGATION ...

// === OTHERS ===