$(document).ready (function () {
	var toggleColorNotVisible = "rgb(33, 150, 243)";
    var toggleColorVisible = "rgb(33, 150, 243)";
    var backgroundColorVisible = "rgb(255, 255, 255)";
    var showAnswersButton = false;

    // var loadNavbar = function () {
    //     $.ajax({
    //         url: "../navbar/navbar.html", 
    //         success: function(data) {
    //             $("#navbar-placeholder").html(data);
    //             $(".button-collapse").sideNav();
    //         }
    //     });
    // };

    // loadNavbar();

    $("#navbar-placeholder").load("../navbar/navbar.html")

    $("#pageContent").load('home-page/homePage.html');

    $(document).on('click', '#keywordButton', function () {
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

    $(document).on('click', '.answer', function () {
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

    $(document).on('click', 'li', function (){
        $('.collapsible').collapsible();
    });

    $("#pageContent").on('click', '#javaCheatSheet', function () {
        $("#pageContent").load("../java-cheatsheet/javaSummary2.html");
        window.scrollTo(0, 0);
    });

    $("#pageContent").on('click', '#javaQuestions', function () {
        $("#pageContent").load("../java-questions/javaQuestions.html");
        window.scrollTo(0, 0);
    });

    $("#navbar-placeholder").on('click', '#home', function () {
        $("#pageContent").load("../home-page/homePage.html");
        window.scrollTo(0, 0);
    });   

});