// navbar
const navbar = document.querySelector(".navlink");
document.querySelector("#menu").onclick = () => {
  navbar.classList.toggle("sidebar");
};

const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("sidebar");
  }
});
