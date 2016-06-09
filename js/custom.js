$(document).ready (function () {
    var toggleColorNotVisible = "rgb(255, 0, 0)";
    var toggleColorVisible = "rgb(0, 0, 0)";
    var backgroundColorVisible = "rgb(255, 255, 255)";
    var showAnswers = false;
    var showAnswersButton = false;

    $("#keywordButton").click(function () {
        if (showAnswersButton) {
            $(".answer").css("color", toggleColorNotVisible);
            $(".answer").css("background-color", toggleColorNotVisible);
        } else {
            $(".answer").css("color", toggleColorVisible);
            $(".answer").css("background-color", backgroundColorVisible);

        }
        showAnswersButton = !showAnswersButton;
    });

    $(".answer").click(function () {
        if (showAnswers) {
            $(this).css("color", toggleColorNotVisible);
            $(this).css("background-color", toggleColorNotVisible);
        } else {
            $(this).css("color", toggleColorVisible);
            $(this).css("background-color", backgroundColorVisible);

        }
        showAnswers = !showAnswers;
    });
    
})