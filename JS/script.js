
//we do effects
$(document).ready(function () {
  $("#designpic").click(function () {
    $("#designpic").slideDown("1500").hide("1200");
    $("#design").show("1500");
  });
  $("#design").click(function () {
    $("#design").slideUp("1500");
    $("#designpic").slideDown("1500");
  });
});
$(document).ready(function () {
  $("#saf-icon").click(function () {
    $("#saf-icon").slideDown("1500").hide("1000");
    $("#safari").show("1500");
  });
  $("#safari").click(function () {
    $("#safari").slideUp("1500");
    $("#saf-icon").slideDown("1500");
  });
});
$(document).ready(function () {
  $("#photo-icon").click(function () {
    $("#photo-icon").slideDown("1500").hide("1000");
    $("#photography").show("1500");
  });
  $("#photography").click(function () {
    $("#photography").slideUp("1500");
    $("#photo-icon").slideDown("1500");
  });
});

