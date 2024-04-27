Reference. Stackoverflow, w3schools, and quora.com

var toDos = [
    "study jquery",
    "watch captain marvel",
    "finish all assignments",
    "Answer all emails",
    "cook spaghetti",
    "change the world"
];

$(document).ready(function() {
    $(".tabs a span").click(function() {
        var $this = $(this);
        $(".tabs span").removeClass("active");
        $this.addClass("active");

        $("main .content").empty();

       
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
