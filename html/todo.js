// The array of to-dos
var toDos = [
    "study jquery",
    "watch captain marvel",
    "finish all assignments",
    "Answer all emails",
    "cook spaghetti",
    "change the world"
];

// Event handlers for tab functionality
$(document).ready(function() {
    $(".tabs a span").click(function() {
        var $this = $(this);

        // Remove the 'active' class from all tabs
        $(".tabs span").removeClass("active");

        // Add the 'active' class to the clicked tab
        $this.addClass("active");

        // Empty the content and reset the main content
        $("main .content").empty();

        // Switch to the appropriate tab content
        if ($this.parent().is(":nth-child(1)")) {
            renderToDos(toDos.slice().reverse()); // Newest first
        } else if ($this.parent().is(":nth-child(2)")) {
            renderToDos(toDos); // Oldest first
        } else if ($this.parent().is(":nth-child(3)")) {
            renderAddTab(); // Add new to-do
        }

        return false;
    });

    // Initially show the newest to-dos
    $(".tabs a:nth-child(1) span").click();
});

// Render to-dos in the content area
function renderToDos(todos) {
    var $content = $("<ul>");
    todos.forEach(function(todo) {
        $content.append($("<li>").text(todo));
    });
    $("main .content").append($content);
}

// Render the Add New To-do Tab
function renderAddTab() {
    var $input = $("<input>"),
        $button = $("<button>").text("+");

    $button.on("click", function() {
        var newToDo = $input.val().trim();
        if (newToDo) {
            toDos.push(newToDo);
            $input.val("");
            $(".tabs a:nth-child(1) span").click(); // Go back to newest to-dos list
        }
    });

    var $content = $("<div>").append($input).append($button);
    $("main .content").append($content);
}
