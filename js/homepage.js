function toggleNav() {
    var overlay = document.getElementById("myNav");
    if (overlay.style.width === "75%") {
        closeNav();
    } else {
        overlay.style.width = "75%";
    }
}

function closeNav() {
    document.getElementById("myNav").style.width = "0";
}