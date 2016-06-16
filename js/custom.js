$(function () {
    var toggleColorNotVisible = "rgb(33, 150, 243)";
    var toggleColorVisible = "rgb(33, 150, 243)";
    var backgroundColorVisible = "rgb(255, 255, 255)";
    var showAnswersButton = false;

    var fadeIn = function (pageLocation, content, timeOut, scrollToTop) {
        $(pageLocation).fadeOut(timeOut, function() {
            $(pageLocation).load(content);
            setTimeout(function() {
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
    $("#pageContent").on('click', '#keywordButton', function () {
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
    $("#pageContent").on('click', '.answer', function () {
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

    $(document).on("click","#pageContent li",function(){
        $('.collapsible').collapsible();
    });

    $("#pageContent").on('click', '#javaCheatSheet', function () {
        fadeIn("#pageContent", "../java-cheatsheet/javaSummary2.html", 50, true);
        fadeIn("#commentsContent", "../comments/comment-section.html", 500, false);
    });

    $("#pageContent").on('click', '#javaQuestions', function (e) {
        fadeIn("#pageContent", "../java-questions/javaQuestions.html", 50, true);
        fadeIn("#commentsContent", "../comments/comment-section.html", 500, false);
    });

    $("#navbar-placeholder").on('click', '#home', function () {
        fadeIn("#pageContent", "../home-page/homePage.html", 50);
        $("#commentsContent").hide();
    });

});
