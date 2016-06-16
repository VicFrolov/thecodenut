var showJavaQComments = function() {
    var config = {
      apiKey: "AIzaSyDiELrcysQjtMGCBYZj9p-9R-3n4mIobIg",
      authDomain: "the-code-nut.firebaseapp.com",
      databaseURL: "https://the-code-nut.firebaseio.com",
      storageBucket: "the-code-nut.appspot.com",
    };
    firebase.initializeApp(config);
    var database = firebase.database();
    var commentsRef = database.ref('comments/')

    var writeComment = function (userName, newComment, time) {
      database.ref('comments/').push({
        userName: userName,
        comment: newComment,
        timeStamp: time
      });
    }

    $("#commentsContent").on("click", "#javaQaddComment", function() {
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

    commentsRef.on('value', function(snapshot) {
      var comments = snapshot.val();
      $.each(comments, function () {
        showComments(this.userName, this.comment, this.timeStamp);
      });
    });

    var showComments = function(username, comment, timeStamp) {
      console.log(username + " " + comment);
      $("#javaQcomments-section").append('<div>' + username + '<br>' + comment + '<br>' + timeStamp +
        '</div>');
    }

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

    //
    // ref.on("child_added", function(snapshot) {
    //   var comment = snapshot.val();
    //   addComment(comment.name, comment.comment, comment.time);
    // });
    //
    // function addComment(name, comment, timeStamp) {
    //   var comments = document.getElementById("comments");
    //   comments.innerHTML = "<hr><h4>" + name + " says<span>" + timeStamp + "</span></h4><p>" + comment + "</p>" + comments.innerHTML;
    // }
};
