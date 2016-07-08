$(function() {
  $(".qr").click(function() {
    var parent = $(this).parent(".value");
    parent.toggleClass("active");
  })
});