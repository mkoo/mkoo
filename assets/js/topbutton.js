//script from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// When the user scrolls down 35px from the top of the document, show the button
window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
        document.getElementById("Top-btn").style.display = "block";
    } else {
        document.getElementById("Top-btn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
