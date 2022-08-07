//ScrollTo #1
const header = document.getElementById("header");
header.onclick = () => {
  const goSection = document.querySelector(".modal"); //секция на которую будет переход
  window.scrollTo({
    top: goSection.offsetTop,
    behavior: "smooth",
  });
};

//ScrollTo #2
const promo = document.getElementById("promo");
promo.onclick = () => {
  const goSection = document.querySelector(".modal"); //секция на которую будет переход
  window.scrollTo({
    top: goSection.offsetTop,
    behavior: "smooth",
  });
};

