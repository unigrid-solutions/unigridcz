//iframe lightbox

[].forEach.call(document.getElementsByClassName("iframe-lightbox-link"), function(el) {
    el.lightbox = new IframeLightbox(el);
});

//Map

var center = SMap.Coords.fromWGS84(16.5771161, 49.2181472);
var m = new SMap(JAK.gel("mapa"), center, 16);
m.addDefaultLayer(SMap.DEF_BASE).enable();
m.addDefaultControls();

var layer = new SMap.Layer.Marker();
m.addLayer(layer);
layer.enable();

var options = {};
var marker = new SMap.Marker(center, "myMarker", options);
layer.addMarker(marker);

//menu

let menuBtn = document.querySelector(".navbar-toggler");
let menuSapce = document.getElementById("collapse_target");

document.querySelectorAll(".nav-link").forEach(item => {
    item.addEventListener("click", () => {
        if (window.innerWidth <= 767) {
            menuBtn.classList.add("collapsed");
            menuBtn.setAttribute("aria-expanded", "false");
            menuSapce.classList.remove("show");
        }
    });
});


//Sticky navbar & To top arrow
let arrowToTop = document.getElementById("to-top");
let navbar = document.getElementById("menu-space");
let welcome = document.getElementById("welcome");
let welcomeTop = welcome.offsetTop;
let welcomeHeight = welcome.offsetHeight;
let sticky = welcomeTop + welcomeHeight;

window.addEventListener("resize", () => {
    welcomeTop = welcome.offsetTop;
    welcomeHeight = welcome.offsetHeight;
    sticky = welcomeTop + welcomeHeight;
});

window.addEventListener("load", () => {
    welcomeTop = welcome.offsetTop;
    welcomeHeight = welcome.offsetHeight;
    sticky = welcomeTop + welcomeHeight;
});

window.addEventListener("scroll", () => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }

    if (window.pageYOffset > (welcomeTop + welcomeHeight + 70)) {
        arrowToTop.classList.remove("hidden");
    } else {
        arrowToTop.classList.add("hidden");
    }
});