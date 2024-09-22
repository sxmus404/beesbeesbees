// $(".navigation-mobile").click( function() { $('.navigation-mobile-dropdown-before').toggleClass('navigation-mobile-dropdown-after'); });

let down = false;
document.getElementById("navigation-mobile").addEventListener("click", () => {
    let elem = document.getElementById("navigation-mobile-dropdown");
    elem.classList.toggle("dropdown-before");
    elem.classList.toggle("dropdown-after");
});