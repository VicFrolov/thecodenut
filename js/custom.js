$(document).ready (function () {
	var toggleColorNotVisible = "rgb(0, 0, 0)";
    var toggleColorVisible = "rgb(0, 0, 0)";
    var backgroundColorVisible = "rgb(255, 255, 255)";
    var showAnswersButton = false;

    $("#keywordButton").click(function () {
        if (showAnswersButton) {
            $(".answer").css("color", toggleColorNotVisible);
            $(".answer").css("background-color", toggleColorNotVisible);
            $(".answer").each(function () {
                this.hideAnswers = false;
            });

        } else {
            $(".answer").css("color", toggleColorVisible);
            $(".answer").css("background-color", backgroundColorVisible);
            $(".answer").each(function () {
                this.hideAnswers = true;
            });
        }
        showAnswersButton = !showAnswersButton;        
    });

    $(".answer").click(function () {
    	console.log("LOL")
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

    $(".button-collapse").sideNav();
    $("#navbar-placeholder").load('../navbar/navbar.html');

    $("#javaCheatSheet").on("click", function () {
    	$("#java-cheatsheet-placeholder").load('../java-cheatsheet/javaSummary2.html');
    	$("#index-banner").hide();
    });
})