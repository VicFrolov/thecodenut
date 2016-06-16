$(function() {
    var config = {
      apiKey: "AIzaSyDiELrcysQjtMGCBYZj9p-9R-3n4mIobIg",
      authDomain: "the-code-nut.firebaseapp.com",
      databaseURL: "https://the-code-nut.firebaseio.com",
      storageBucket: "the-code-nut.appspot.com",
    };
    firebase.initializeApp(config);

    var database = firebase.database();


    var writeComment = function (userName, newComment, time) {
      database.ref('comments/').push({
        userName: userName,
        comment: newComment,
        timeStamp: time
      });
    }


    $("#commentsContent").on("click", "#addComment", function() {
      var username = $("#usernameInput").val();
      var newComment = $("#commentInput").val();
      var time = timeStamp();

      console.log(username);
      console.log(newComment);
      console.log(time);
      writeComment(username, newComment, time);
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
    //
    // function postComment() {
    //   var name = document.getElementById("name").value,
    //       comment = document.getElementById("comment").value,
    //       time = timeStamp();
    //
    //   if (name && comment) {
    //     ref.push({
    //       name: name,
    //       comment: comment,
    //       time: time
    //     });
    //   }
    //
    //   document.getElementById("name").value = '';
    //   document.getElementById("comment").value = '';
    // }
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
});
