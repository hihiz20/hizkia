$(document).ready(function() {
    // Function to add a comment
    function addComment() {
        var commentText = $(".comment-input input").val().trim();
        if (commentText === "") {
            alert("Please enter a comment before posting.");
            return;
        }
        var $new_comment = $("<p>").text(commentText).hide();
        $(".comments").append($new_comment);
        $new_comment.fadeIn();
        $(".comment-input input").val(""); // Clear the input field after posting
    }

    // Event listener for adding a comment
    $(".add-comment").on("click", addComment);
    $(".comment-input input").on("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addComment();
        }
    });

    // Event listener for the Clear button
    $(".clear-input").on("click", function() {
        $(".comment-input input").val(""); // Reset the input box
    });

    // Event listener for the Remove all button
    $(".remove-all").on("click", function() {
        $(".comments").empty(); // Remove all posts
    });
});
