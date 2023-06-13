
var burgerIcon = document.getElementById("burger-icon");


var smallNavbar = document.querySelector(".small_navbar");


burgerIcon.addEventListener("click", function () {

smallNavbar.classList.toggle("active");
});

var image = document.getElementById("tanke_img");
var text = document.getElementById("tanke_tekst");
var isTextVisible = false;

var image = document.getElementById("tanke_img");
var text = document.getElementById("tanke_tekst");
var clickMeText = document.getElementById("klik_her");
var isTextVisible = false;

image.addEventListener("click", handleClick);
clickMeText.addEventListener("click", handleClick);

function handleClick() {
  image.classList.add("shake-animation");
  setTimeout(function () {
    image.classList.remove("shake-animation");
  }, 500);

  if (!isTextVisible) {
    text.style.opacity = 1;
    clickMeText.style.display = "none";
    isTextVisible = true;
  } else {
    text.style.opacity = 0;
    clickMeText.style.display = "block";
    isTextVisible = false;
  }
}
