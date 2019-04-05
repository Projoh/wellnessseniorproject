var number = 1;



jQuery(document).ready(function($) {
    var pageName = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

    fadeInCurrentPage();
    if(pageName == "credits.html")
        return;
    if (location.hash == "" || location.hash == null || location.hash == "#!" || isNaN(location.hash.substring(1))) {
        location.hash = "1";
    }
    number = location.hash;
});

function fadeInCurrentPage() {
    var page = $('body').children('.page');
    page.fadeIn(150);
}

function goToAssessment() {
    var page = $('body').children('.page');
    page.fadeOut(150);
    setTimeout(function () {
        window.location.href = "/wellnessseniorproject/assessment.html" + number;
    }, 140);
}

function goToCategory() {
    var page = $('body').children('.page');
    page.fadeOut(150);
    setTimeout(function () {
        window.location.href = "/wellnessseniorproject/category.html" + number;
    }, 140);
}

function goToResult() {
    var page = $('body').children('.page');
    page.fadeOut(150);
    setTimeout(function () {
        window.location.href = "/wellnessseniorproject/results.html" + number;
    }, 140);
}

function goToHomePage() {
    var page = $('body').children('.page');
    page.fadeOut(150);
    setTimeout(function () {
        window.location.href = "/wellnessseniorproject/index.html";
    }, 140);
}