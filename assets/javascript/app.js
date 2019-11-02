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
  