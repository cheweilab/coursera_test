var main = function () {
    "use strict";
    $(".comment-input button").on("click", function () {
        var $new_comment = $("<p>"),
            comment_text = $(".comment-input input").val();
            $new_comment.text(comment_text);
        $(".comments").append($new_comment);
        comment_text = $(".comment-input input").val("");
    });
};
$(document).ready(main);
