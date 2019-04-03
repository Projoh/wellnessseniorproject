function fadeOutHome() {
    var home_page = $('#main-page');
    home_page.fadeOut(150);
}
function fadeOutCategory() {
    var doc = $('#category-page');
    doc.fadeOut(150);
}


function fadeInCategory(categoryName) {
    var serverCall;

    // Call to server, aka google doc
    var doc = $('#category-page');
    var title_element = $('#category-title');
    var descr_element = $('#category-description');
    //set element data

    fadeInPage(doc);
}


function fadeInAssessment(element) {
    // var serverCall;
    //
    // var documentResult;
    //  var questions = documentResult.split("\n"); // Dont forget to remove empty questions
    //
    // for(var i = 0; i < 10 && i< questions.length; i++) {
    //     var question_label_element  = $('#question-'+i+'-select');
    //     question_label_element.innerText = questions[i];
    // }

    fadeOutCurrentPage(element);
    var assessment_page = $('#assessment-page');
    fadeInPage(assessment_page);
}


function goToCategory(number) {
    var page = $('body').children('.page');
    page.fadeOut(150);
    setTimeout(function () {
        window.location.href = "/wellnessseniorproject/category.html#" + number;
    }, 140);
}

function goToResult(element) {
    fadeOutCurrentPage(element);
    var result_page = $('#result-page');
    fadeInPage(result_page);
}

function fadeOutCurrentPage(element) {
    var e = $(element);
    var page = e.parentsUntil('.page');

    page.fadeOut(150);
}



function fadeInPage(page) {
    setTimeout(function () {
        page.fadeIn(150);
    }, 200);
}


// Pages possible: Home, category + #, assessment + #, assessmentresult + #