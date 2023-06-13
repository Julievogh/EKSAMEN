
var burgerIcon = document.getElementById("burger-icon");


var smallNavbar = document.querySelector(".small_navbar");


burgerIcon.addEventListener("click", function () {

  smallNavbar.classList.toggle("active");
});