import { EditCart } from "../pages/cartPage.js";
import { getAdded } from "../pages/cartPage.js";

export function getProductCard(imgPath, imgAlt, number, price, action) {
  const item = document.createElement("li");
  item.classList.add("product-list__item");

  const ProductPhoto = document.createElement("img");
  ProductPhoto.classList.add("product-list__photo");
  ProductPhoto.src = imgPath;
  ProductPhoto.alt = imgAlt;

  const ProductTitle = document.createElement("b");
  ProductTitle.classList.add("product-list__title");
  ProductTitle.textContent = `Модель ${number}`;

  const ProductPrice = document.createElement("i");
  ProductPrice.classList.add("product-list__price");
  ProductPrice.textContent = `${price} RUB`;

  const button = document.createElement("button");
  button.classList.add("btn");

  switch (action) {
    case "add":
      const added = getAdded();
      if (added.indexOf(number) != -1) {
        button.classList.add("highlighted");
        button.textContent = "Добавлено";
      } else button.textContent = "Добавить в корзину";
      button.addEventListener("click", function (event) {
        event.preventDefault();
        button.classList.add("highlighted");
        button.textContent = "Добавлено";
        EditCart(number, "add");
      });
      break;
    case "remove":
      button.textContent = "Удалить из корзины";
      button.addEventListener("click", function (event) {
        event.preventDefault();
        EditCart(number, "remove");
      });
      break;
  }

  item.append(ProductPhoto, ProductTitle, ProductPrice, button);

  return item;
}
