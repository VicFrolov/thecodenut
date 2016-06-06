$(document).ready (function () {
    var toggleColorNotVisible = "rgb(255, 0, 0)";
    var toggleColorVisible = "rgb(0, 0, 0)";
    var backgroundColorVisible = "rgb(255, 255, 255)";

    $(".answer").click(function () {
        if ($(this).css("color") === toggleColorVisible) {
            $(this).css("color", toggleColorNotVisible);
            $(this).css("background-color", toggleColorNotVisible);
        } else {
            $(this).css("color", toggleColorVisible);
            $(this).css("background-color", backgroundColorVisible);

        }
    });
    
})