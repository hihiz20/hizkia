var main = function () { 
    "use strict"; 

    // create and hide our content as a div
    var $content = $("<div>Hello World!</div>").hide();
    var $moreContent = $("<div>Goodbye World!</div>").hide(); 

    // append the content to the body element
    $("body").append($content);

    // slide the content down for 2 seconds
    $content.slideDown(2000, function() {
        // This callback function is executed after the slideDown animation completes

        // append the second content to the body 
        $("body").append($moreContent);
        
        // fade in the second content
        $moreContent.fadeIn();
    });
}

$(document).ready(main);
