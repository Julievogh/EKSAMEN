// Get the burger icon element
var burgerIcon = document.getElementById("burger-icon");

// Get the small navbar element
var smallNavbar = document.querySelector(".small_navbar");

// Add a click event listener to the burger icon
burgerIcon.addEventListener("click", function () {
  // Toggle the active class on the small navbar
  smallNavbar.classList.toggle("active");
});