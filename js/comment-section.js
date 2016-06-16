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
        console.log('comments/' + currentPage + '/');
        database.ref('comments/' + currentPage + '/').push({
            userName: userName,
            comment: newComment,
            timeStamp: time
        });
    };

    var showComments = function (json) {
        var html = '';
        $.each(json, function() {
            html += '<div>' + this.userName + '<br>' + this.comment + '<br>' + this.timeStamp + '</div>';
        });
        $("#comments-section").html(html);
    };

    $(document).on('click', '#addComment', function() {
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

    $(document).on('click', '#javaQuestions', function() {
        currentPage = this.id;
        currentCommentSection = commentsRef.child(currentPage);
        commentsRef.orderByPriority().on('value', function(snapshot) {
            var comments = snapshot.val();
            showComments(comments);
        });
    });

        // Thanks to https://gist.github.com/hurjas/2660489#file-timestamp-js-L26
    function timeStamp() {
        var now = new Date();
        var date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];
        var time = [now.getHours(), now.getMinutes()];
        var suffix = (time[0] < 12) ? "AM" : "PM";
        time[0] = (time[0] < 12) ? time[0] : time[0] - 12;

        for (var i = 1; i < 3; i++) {
            if (time[i] < 10) {
              time[i] = "0" + time[i];
            }
        }
        return date.join("/") + ", " + time.join(":") + " " + suffix;
    }
});
