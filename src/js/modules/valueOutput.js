const cardsProduct = [
  {
    isAvaliable: false,
    imgUrl: "img/featuredProducts/1.png",
    title: "Wooden Table-Chair",
    text: "You don’t have and a tablechair. Shop with 40% discount !",
    price: 1299,
    specialPrice: 1199,
    rating: "★★★",
    isSpecial: true,
  },
  {
    isAvaliable: true,
    imgUrl: "img/featuredProducts/2.png",
    title: "Wooden Table-Chair",
    text: "You don’t have and a tablechair. Shop with 40% discount !",
    price: 1599,
    specialPrice: 1399,
    rating: "★★★★",
    isSpecial: false,
  },
  {
    isAvaliable: true,
    imgUrl: "img/featuredProducts/3.png",
    title: "Wooden Table-Chair",
    text: "You don’t have and a tablechair. Shop with 40% discount !",
    price: 1399,
    specialPrice: 1099,
    rating: "★★",
    isSpecial: true,
  },
];

const makeElement = function (tagName, className, text) {
  const element = document.createElement(tagName);

  text ? (element.textContent = text) : "";
  className ? element.classList.add(className) : "";

  return element;
};

const createCard = function (product) {
  const listItem = makeElement("li");

  const picture = makeElement("img");
  picture.src = product.imgUrl;
  listItem.appendChild(picture);

  const title = makeElement("h3", "", product.title);
  listItem.appendChild(title);

  const text = makeElement("h4", "", product.text);
  listItem.appendChild(text);

  const inner = makeElement("div", "inner");
  listItem.appendChild(inner);

  const innerWrap = makeElement("div", "inner__wrap");
  inner.appendChild(innerWrap);

  const innerWrapPrice = makeElement("div", "inner__wrap__price");
  innerWrap.appendChild(innerWrapPrice);

  const price = makeElement("i", "", "$" + product.price);
  innerWrapPrice.appendChild(price);

  const star = makeElement("p", "", product.rating);
  innerWrap.appendChild(star);

  const button = makeElement("a", "btn__min");
  button.href = "#";
  !product.isAvaliable ? button.textContent = "Sold" : button.textContent = "Shop Now";
  inner.appendChild(button);

  if (product.isSpecial) {
    price.classList.add("products__special");
    const specialPrice = makeElement("span", "", "$" + product.specialPrice);
    innerWrapPrice.appendChild(specialPrice);
  }

  !product.isAvaliable ? listItem.classList.add("products__avaliable") : "";

  return listItem;
};

//Перебор массива
const cardList = document.querySelector(".featured__products");

for (let i = 0; i < cardsProduct.length; i++) {
  const cardItem = createCard(cardsProduct[i]);
  cardList.appendChild(cardItem);
}
