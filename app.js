var main = function () {
    "use strict";

    /*click event*/

    $(".comment-input button").on("click", function () {

        var $new_comment = $("<p>"),
            $checkbox = $('<input>').attr({
                type: 'checkbox',
                name: 'someCheckbox',
                value: 'someValue'
            }),
            comment_text = $(".comment-input input").val();
    
      
        if (comment_text !== "") {
          
            $new_comment.append($checkbox);
    
      
            $new_comment.append(document.createTextNode(comment_text));
    
           
            $(".comments").append($new_comment);
    
            $(".comment-input input").val("");
        }
    });
    
    
    




    /* enter keypress */
    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            var $new_comment = $("<p>"),
            $checkbox = $('<input>').attr({
                type: 'checkbox',
                name: 'someCheckbox',
                value: 'someValue'
            }),
            comment_text = $(".comment-input input").val();
    
            if (comment_text !== "") {
                $new_comment.append($checkbox);
                $new_comment.append(document.createTextNode(comment_text));
                $(".comments").append($new_comment);
                $(".comment-input input").val("");
            }
        }
    }); 
    



};
$(document).ready(main);
