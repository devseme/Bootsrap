
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
  $("#products-icon").click(function () {
    $("#products-icon").slideDown("1500").hide("1000");
    $("#products").show("1500");
  });
  $("#products").click(function () {
    $("#products").slideUp("1500");
    $("#products-icon").slideDown("1500");
  });
});

