// business logic
function myFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("submit-vol");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function myFunction2() {
  // Get the snackbar DIV
  var x = document.getElementById("sign-up");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function myFunction3() {
  // Get the snackbar DIV
  var x = document.getElementById("mpesa");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
// user logic
$(document).ready(function() {
  $('.donateClothes').click(function(event) {
    event.preventDefault();
    $(".donateClothesText").slideToggle(1000);
    $(".donateMoneyText").hide();
  })
  $('.donateMoney').click(function(event) {
    event.preventDefault();
    $(".donateMoneyText").slideToggle(1200);
    $(".donateClothesText").hide();
  })
});