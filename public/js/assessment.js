function storeAssessment() {
    var questionAnswers = $('.form-control  option:selected');
    var score = 0;
    questionAnswers.each(function( index ) {
       var curScore = parseInt($(this).text());
       score += curScore;
    });
    setCookie(location.hash, score);
}

function setCookie(cname, cvalue, ) {
    var d = new Date();
    d.setTime(d.getTime() + (3605*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

if(getCookie(location.hash) !== '') {
    var viewOldButton = $('#view-old-assessment');
    viewOldButton.css("display","block");
}

