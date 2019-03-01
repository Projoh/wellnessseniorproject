function fadeOutHome() {
    var home_page = $('#main-page');
    home_page.fadeOut(200);
}

function fadeInCategory(categoryName) {
    var serverCall;

    // Call to server, aka google doc
    var doc = $('#category-page');
    var title_element = $('#category-title');
    var descr_element = $('#category-description');
    //set element data
    doc.fadeIn(200);
}

function fadeInAssessment(categoryName) {
    var serverCall;

    var documentResult;
    var questions = documentResult.split("\n"); // Dont forget to remove empty questions
    var assessment_page = $('#assessment-page');

    for(var i = 0; i < 10 && i< questions.length; i++) {
        var question_label_element  = $('#question-'+i+'-select');
        question_label_element.innerText = questions[i];
    }

    assessment_page.fadeIn();
}

function goToCategory(element) {
    var categoryName = element.innerText;

    fadeOutHome();
    fadeInCategory(categoryName);
}