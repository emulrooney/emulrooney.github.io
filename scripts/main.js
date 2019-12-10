const scrollOffset = 64;

window.addEventListener("load", function() {
    var nav = document.getElementById('navigation');
    nav.classList.remove("nav--opaque");

    window.onscroll = function () { 
        "use strict";
        if (window.pageYOffset > scrollOffset || document.documentElement.scrollTop > scrollOffset || document.body.scrollTop >= scrollOffset ) {
            nav.classList.add("nav--opaque");
        } 
        else {
            nav.classList.remove("nav--opaque");
        }
    };
});

