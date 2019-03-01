function fadeOutHome() {
    var home = $('#main-page');
    home.fadeOut(200);
}

function fadeInCategory(categoryName) {
    var serverCall;

    // Call to server, aka google doc

}

function goToCategory(element) {
    var categoryName = element.innerText;

    fadeOutHome();
    fadeInCategory(categoryName);
}