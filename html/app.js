$(document).ready(function() {
    // Consolidated function for adding comments
    var addCommentFromInputBox = function() {
        var commentText = $(".comment-input input").val().trim(); // Retrieve and trim input

        // Check for empty input
        if (commentText === "") {
            alert("Please enter a comment before posting."); // Alert for empty comment
            return; // Prevents further execution for empty input
        }

        // Create and hide new comment element for fade-in effect
        var $new_comment = $("<p>").text(commentText).hide();

        // Append new comment to the comments section and apply fade-in effect
        $(".comments").append($new_comment);
        $new_comment.fadeIn();

        // Clear the input field after posting
        $(".comment-input input").val("");
    };

    // Event listener for the click event on the submit button
    $(".comment-input button").on("click", function(event) {
        addCommentFromInputBox(); // Call the consolidated function
    });

    // Event listener for the keypress event in the input field
    $(".comment-input input").on("keypress", function(event) {
        if (event.key === "Enter") { // Check if the "Enter" key was pressed
            event.preventDefault(); // Prevent the default form submission action
            addCommentFromInputBox(); // Call the consolidated function
        }
    });
});
