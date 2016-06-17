$(function () {
    var config = {
        apiKey: "AIzaSyDiELrcysQjtMGCBYZj9p-9R-3n4mIobIg",
        authDomain: "the-code-nut.firebaseapp.com",
        databaseURL: "https://the-code-nut.firebaseio.com",
        storageBucket: "the-code-nut.appspot.com",
    };

    firebase.initializeApp(config);
    var database = firebase.database();
    var commentsRef = database.ref('comments/');
    var currentPage = "";

    var writeComment = function (userName, newComment, time) {
        database.ref('comments/' + currentPage + '/').push({
            userName: userName,
            comment: newComment,
            timeStamp: time
        });
    };

    var showComments = function (json) {
        var html = '';
        //make sure there's something there
        if (json) {
            $.each(json, function () {
                html += '<div>' + this.userName + '<br>' + this.comment + '<br>' + this.timeStamp + '</div>';
            });
        } else {
            html += '<div> No comments posted, yet....';
        }
        $("#comments-section").html(html);
    };

    $("main").on('click', '#addComment', function (e) {
        e.preventDefault();
        var username = $("#usernameInput").val();
        var newComment = $("#commentInput").val();
        var time = timeStamp();

        if (username && newComment) {
            writeComment(username, newComment, time);
            $("#usernameInput").val('');
            $("#commentInput").val('');
        } else {
            alert("please enter a username and comment");
        }
    });

    $("main").on('click', '#interview-questions', function (e) {
        e.preventDefault();
        currentPage = this.id;
        currentCommentSection = commentsRef.child(currentPage);
        currentCommentSection.orderByPriority().on('value', function (snapshot) {
            var comments = snapshot.val();
            showComments(comments);
        });
    });

    $("main").on('click', '#java-cheatsheet', function (e) {
        e.preventDefault();
        currentPage = this.id;
        currentCommentSection = commentsRef.child(currentPage);
        currentCommentSection.orderByPriority().on('value', function (snapshot) {
            var comments = snapshot.val();
            showComments(comments);
        });
    });

    var timeStamp = function () {
        var now = new Date();
        return now.toLocaleString().replace(/:\d{2}\s/,' ');
    };

});
