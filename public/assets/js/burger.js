$(function(){
$(".create-form").on("submit", function(event) {
  //Prevents default entry
  event.preventDefault();

  //creates a new burger
  var newBurger = {
    name: $("#brgr").val().trim()
    };
    
  //POST request
  $.ajax("/api/burger", {
    type: "POST",
    data: newBurger
  }).then(
    function() {
      console.log("Here's your burger.");
      location.reload();
    }
  );
});

$(".eat-burger").on("click", function(event) {
  var id = $(this).data("id");

  //DELETE request
  $.ajax("/api/burger/" + id, {
    type: "DELETE"
  }).then(
    function() {
      console.log("eated the burger", id);
      //page reload
      location.reload();
    }
  );
});
});