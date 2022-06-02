$(document).ready(function() {
  $("form#info").submit(function(event) {
    event.preventDefault();
    const ageInput = $("input#age").val();

    if (ageInput >= 18) {
      $('#over18').show();
      $('#under18').hide();
      $('form#info').hide();
    } else {
      $('#under18').show();
      $('#over18').hide();
      $('form#info').hide();
    }
  });
});