/* Author: Julian Strategia */
$(document).ready(function() {
    $("img.a").hover(
    function() {
        $(this).stop().animate({
            "opacity": "0"
        },
        "medium");
    },
    function() {
        $(this).stop().animate({
            "opacity": "1"
        },
        "medium");
    });

});