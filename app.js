var main = function () {
    "use strict";

    /*click event*/
    
    $(".comment-input button").on("click", function () {
        var $new_comment = $("<p>"),
            comment_text = $(".comment-input input").val();
            $new_comment.text(comment_text);
        $(".comments").append($new_comment);
        comment_text = $(".comment-input input").val("");
        if (comment_text = $(".comment-input input").val()!==""){

            $(".comments").append($new_comment);
        comment_text = $(".comment-input input").val("");

        }
        
    });

    /* enter keypress */

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {  
            var $new_comment = $("<p>"),
                comment_text = $(".comment-input input").val();
            
            $new_comment.text(comment_text);
            
            if (comment_text !== "") {  
                $(".comments").append($new_comment); 
                $(".comment-input input").val("");
            }
        }
    });
    


};
$(document).ready(main);
