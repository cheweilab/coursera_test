var main = function () {
    "use strict";

    /*Objective:  Task交接本
    1. create A delete button that will remove all checked notes
    2. Advanced: 
    (1) Commentary creators will be shown with a thumbnail after the added comment
    */

    /*click event*/

    $(".comment-input button").on("click", function () {
        var $new_comment = $("<p>"),
            $checkbox = $('<input>').attr({
                type: 'checkbox',
                name: 'someCheckbox',
                value: 'someValue'
            }),
            $newImage = $("<img>").attr({
                src: 'https://w7.pngwing.com/pngs/625/201/png-transparent-shock-emoji-emoji-iphone-computer-icons-emoji-head-smiley-sticker-thumbnail.png',
                alt: 'Shock emoji',
                style: 'width: 20px; height: 20px; margin-left: 5px;'
            }),
            comment_text = $(".comment-input input").val();

        if (comment_text !== "") {
            $new_comment.append($checkbox);
            $new_comment.append(" "); // Add a space for readability
            $new_comment.append(document.createTextNode(comment_text));
            $new_comment.append($newImage);

            $(".comments").append($new_comment);

            $(".comment-input input").val("");

           
            $checkbox.on('change', function () {
                if (this.checked) {
                    $(this).closest('p').css('text-decoration', 'line-through');
                } else {
                    $(this).closest('p').css('text-decoration', 'none');
                }
            });
        }
    });

    /* minus click event */

    $(".functions button").on("click", function () {
        console.log("hello");

        if ($(".comments input:checked").length > 0) {
            $(".comments input:checked").closest("p").remove();
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
                $new_comment.append($checkbox).fadeIn();
                $new_comment.append(document.createTextNode(comment_text));
                $(".comments").append($new_comment);
                $(".comment-input input").val("");
            }
        }
    });

}; 

var $content = $("<div><h5>Contact Us</h5></div>").hide();
var $moreContent = $("<p><strong>Email:</strong> kanahei.hsieh@gmail.com</p>").hide();

$("body").append($content);
$content.slideDown(2000);
$("body").append($moreContent);
$moreContent.fadeIn();


$(document).ready(main);
