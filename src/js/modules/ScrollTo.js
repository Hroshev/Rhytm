//ScrollTo #1
const store = document.getElementById("store");
store.onclick = () => {
  const goSection = document.querySelector(".store"); //секция на которую будет переход
  window.scrollTo({
    top: goSection.offsetTop,
    behavior: "smooth",
  });
};

//ScrollTo #2
const collections = document.getElementById("collections");
collections.onclick = () => {
  const goSection = document.querySelector(".application"); //секция на которую будет переход
  window.scrollTo({
    top: goSection.offsetTop,
    behavior: "smooth",
  });
};

