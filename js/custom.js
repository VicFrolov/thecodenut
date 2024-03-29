$(function () {
    var toggleColorNotVisible = "rgb(33, 150, 243)";
    var toggleColorVisible = "rgb(33, 150, 243)";
    var backgroundColorVisible = "rgb(255, 255, 255)";
    var showAnswersButton = false;

    var fadeIn = function (pageLocation, content, timeOut, scrollToTop) {
        $(pageLocation).fadeOut(timeOut, function () {
            $(pageLocation).load(content);
            setTimeout(function () {
                $(pageLocation).fadeIn('slow');
                if (scrollToTop) {
                    window.scrollTo(0, 0);
                }
            }, timeOut);
        });
    };

    // var loadNavbar = function () {
    //     $.ajax({
    //         url: "../navbar/navbar.html",
    //         success: function(data) {
    //             $("#navbar-placeholder").html(data);
    //             $(".button-collapse").sideNav();
    //         }
    //     });
    // };

    //load navbar and pageContent immediately
    $("#navbar-placeholder").load("../navbar/navbar.html");
    fadeIn("#pageContent", "../home-page/homePage.html");

    //shows/hides all answers
    $("#pageContent").on('click', '#keywordButton', function (e) {
        e.preventDefault();
        if (showAnswersButton) {
            $(this).text("Show");
            $(".answer").css("color", toggleColorNotVisible);
            $(".answer").css("background-color", toggleColorNotVisible);
            $(".answer").each(function () {
                this.hideAnswers = false;
            });

        } else {
            $(this).text("Hide");
            $(".answer").css("color", toggleColorVisible);
            $(".answer").css("background-color", backgroundColorVisible);
            $(".answer").each(function () {
                this.hideAnswers = true;
            });
        }
        showAnswersButton = !showAnswersButton;
    });

    //shows/hides specific answer
    $("#pageContent").on('click', '.answer', function (e) {
        e.preventDefault();
        this.hideAnswers = this.hideAnswers || false;
        if (this.hideAnswers) {
            $(this).css("color", toggleColorNotVisible);
            $(this).css("background-color", toggleColorNotVisible);
        } else {
            $(this).css("color", toggleColorVisible);
            $(this).css("background-color", backgroundColorVisible);
        }
        this.hideAnswers = !this.hideAnswers;
    });

    $("main").on("click","#pageContent li", function (e){
        e.preventDefault();
        $('.collapsible').collapsible();
    });

    $("#pageContent").on('click', '#java-cheatsheet', function (e) {
        e.preventDefault();
        fadeIn("#pageContent", "../java-cheatsheet/javaSummary2.html", 50, true);
        fadeIn("#commentsContent", "../comments/comment-section.html", 300, false);
    });

    $("#pageContent").on('click', '#interview-questions', function (e) {
        e.preventDefault();
        fadeIn("#pageContent", "../java-questions/interviewQuestions.html", 50, true);
        fadeIn("#commentsContent", "../comments/comment-section.html", 300, false);
    });

    $("#navbar-placeholder").on('click', '#home', function (e) {
        e.preventDefault();
        fadeIn("#pageContent", "../home-page/homePage.html", 50, false);
        $("#commentsContent").fadeOut(50);
    });

});
