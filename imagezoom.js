const openBtns = document.querySelectorAll(".openModal");
const closeBtns = document.querySelectorAll(".close");

for (const btn of openBtns) {
  btn.addEventListener("click", function (event) {
    event.target.nextElementSibling.style.display = "block";
  });
}

for (const btn of closeBtns) {
  btn.addEventListener("click", function (event) {
    event.target.parentNode.style.display = "none";
  });
}
