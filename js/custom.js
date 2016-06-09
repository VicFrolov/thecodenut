$(document).ready (function () {
	var toggleColorNotVisible = "rgb(0, 0, 0)";
    var toggleColorVisible = "rgb(0, 0, 0)";
    var backgroundColorVisible = "rgb(255, 255, 255)";
    var showAnswersButton = false;

    var loadNavbar = function () {
        $.ajax({
            url: "../navbar/navbar.html", 
            success: function(data) {
                $("#navbar-placeholder").html(data);
                $(".button-collapse").sideNav();
            }
        });
    };

    loadNavbar();

    $(document).on('click', '#keywordButton', function () {
        if (showAnswersButton) {
            $(this).val("Show Answers");
            $(".answer").css("color", toggleColorNotVisible);
            $(".answer").css("background-color", toggleColorNotVisible);
            $(".answer").each(function () {
                this.hideAnswers = false;
            });

        } else {
            $(this).val("Hide Answers");
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

    $("#javaCheatSheet").on('click', function () {
        $("#java-cheatsheet-placeholder").load("../java-cheatsheet/javaSummary2.html");
        $("#index-banner").hide();
    });

});