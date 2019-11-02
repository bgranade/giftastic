$(document).ready(function() {
    //Array for searched topics to be added
    var topics = [];
    
        //Function with AJAX call to GIPHY; Q parameterc for API link set to search term, limit 10 results
      //Create div with respective still and animate image sources with "data-state", "data-still" and "data-animate" attributes
         function display_topics() {
    
        var x = $(this).data("search");
        console.log(x);
    
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=TevVqa61oCyK681cGUE5NbMihi06pAf6&limit=25&rating=R";
    
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
          }).done(function(response) {
              var results = response.data;
              console.log(results);
              for (var i = 0; i < results.length; i++) {
                var topicsDiv = $("<div class='col-md-4'>");
    
                var rating = results[i].rating;
                var defaultAnimatedSrc = results[i].images.fixed_height.url;
                var staticSrc = results[i].images.fixed_height_still.url;
                var topicsImage = $("<img>");
                var p = $("<p>").text("Rating: " + rating);
    
                topicsImage.attr("src", staticSrc);
                topicsImage.addClass("_Giphy");
                topicsImage.attr("data-state", "still");
                topicsImage.attr("data-still", staticSrc);
                topicsImage.attr("data-animate", defaultAnimatedSrc);
                topicsDiv.append(p);
                topicsDiv.append(topicsImage);
                $("#gifArea").prepend(topicsDiv);
    
            }
        });
    }