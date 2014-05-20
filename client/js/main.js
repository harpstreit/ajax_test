(function() {
  'use strict';

  // enter code here

  $(document).ready(function() {
    console.log('all hooked up');
  });

  function display(cats) {
    $("ul.cats").append("<li>" + cats + "</li>");
  }

  function fetch() {
    $.ajax({
      type: "GET",
      url: "cats/api",
      success: function()
    })
  }

  function addListeners()
  $("button").click function() {

  }
}());
