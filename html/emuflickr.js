$(document).ready(function() {
    // Function to perform the Flickr image search
    function searchImages() {
        // Clear previous search results
        $('#imageContainer').empty();
        
        // Get the user input from the text field
        var searchTerm = $('#searchInput').val();
        
        // Construct the Flickr API URL with the user's search term
        var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        var flickrOptions = {
            tags: searchTerm,
            format: "json"
        };
        
        // Make the AJAX request to Flickr
        $.getJSON(flickrAPI, flickrOptions, function(flickrResponse) {
            // Loop through the response and append images to the container
            flickrResponse.items.forEach(function(photo) {
                var $img = $("<img>");
                $img.attr("src", photo.media.m);
                $('#imageContainer').append($img);
            });
        });
    }
    
    // Event listener for the search button
    $('#searchButton').click(searchImages);
    
    // Event listener for the text input field
    $('#searchInput').on('input', searchImages);
});
