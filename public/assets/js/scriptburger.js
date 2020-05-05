$(function() {
    $(".change-sleep").on("click", function(event) {
      var id = $(this).data("id");
      var newSleep = $(this).data("newsleep");
  
      var newSleepState = {
        sleepy: newSleep
      };
  
      // Send the PUT request.
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: newSleepState
      }).then(
        function() {
          console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newburger = {
        burger_name: $("#burger_name").val().trim(),
        devoured: 0
      };
  console.log(newburger);
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newburger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  