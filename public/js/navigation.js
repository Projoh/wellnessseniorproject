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
        window.location.href = "/assessment.html" + number;
    }, 140);
}

function goToCategory() {
    var page = $('body').children('.page');
    page.fadeOut(150);
    setTimeout(function () {
        window.location.href = "/category.html" + number;
    }, 140);
}

function goToResult() {
    var page = $('body').children('.page');
    page.fadeOut(150);
    setTimeout(function () {
        window.location.href = "/results.html" + number;
    }, 140);
}

function submitNewResults() {
    var page = $('body').children('.page');
    storeAssessment();
    page.fadeOut(150);
    setTimeout(function () {
        window.location.href = "/results.html" + number;
    }, 140);
}

function goToHomePage() {
    var page = $('body').children('.page');
    page.fadeOut(150);
    setTimeout(function () {
        window.location.href = "../index.html";
    }, 140);
}

function goToResources() {
    var page = $('body').children('.page');
    page.fadeOut(150);
    setTimeout(function () {
        window.location.href = "/resources.html" + number;
    }, 140);
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}