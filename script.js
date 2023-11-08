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

const pertanyaanone = document.querySelector(".text-quest-1");
document.querySelector("#show-1").onclick = () => {
  pertanyaanone.classList.toggle("jawab-1");
};

const pertanyaantwo = document.querySelector(".text-quest-2");
document.querySelector("#show-2").onclick = () => {
  pertanyaantwo.classList.toggle("jawab-2");
};

const pertanyaanthree = document.querySelector(".text-quest-3");
document.querySelector("#show-3").onclick = () => {
  pertanyaanthree.classList.toggle("jawab-3");
};

const pertanyaanfour = document.querySelector(".text-quest-4");
document.querySelector("#show-4").onclick = () => {
  pertanyaanfour.classList.toggle("jawab-4");
};

const pertanyaanfive = document.querySelector(".text-quest-5");
document.querySelector("#show-5").onclick = () => {
  pertanyaanfive.classList.toggle("jawab-5");
};

const pertanyaansix = document.querySelector(".text-quest-6");
document.querySelector("#show-6").onclick = () => {
  pertanyaansix.classList.toggle("jawab-6");
};
