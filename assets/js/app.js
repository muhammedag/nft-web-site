$(document).on("click", ".toggle", function () {
    $("nav").toggleClass("active");
});

particlesJS.load("particles", "assets/js/particlesjs-config.json", function() {
    return true;
});