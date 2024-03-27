$(document).ready(function() {
    $(".comment-input button").on("click", function (event) {
        var commentText = $(".comment-input input").val(); // Get the value of the input box
        var $new_comment = $("<p>").text(commentText); // Create a new paragraph element with the input value
        $(".comments").append($new_comment); // Append the new comment to the comments section
    });
});
