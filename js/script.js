$(document).ready(function () {
  $('.navbar-side-list').hide();
  $(document).on('click', '.custom-toggle', function() {
    $('.navbar-side').show("fade", 200);
    $('.navbar-side-list').show("slide", { direction: "right" }, 200);
  });
  $(document).on('click', '.navbar-side', function(e) {
    
    if(e.target != this) return;

    $('.navbar-side').hide("fade", 200);
    $('.navbar-side-list').hide("slide", { direction: "right" }, 200);
  })
});