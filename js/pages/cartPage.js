import { getCard } from "../components/cards.js";
import { getDesc } from "../components/desc.js";
import { getMainTitle } from "../components/mainTitle.js";
import { navigation } from "../main.js";

let added = [];

export function getAdded() {
  return added;
}

export function emptyCart() {
  added = [];
}

export function EditCart(number, action) {
  switch (action) {
    case "add":
      if (!added.includes(number)) added.push(number);
      console.log(added);
      break;
    case "remove":
      for (let i = 0; i < added.length; i++) {
        if (number === added[i]) added.splice(i, 1);
      }
      console.log(added);
      navigation("cart");
      break;
  }
}

export function getCartPage() {
  const page = document.createElement("div");
  page.classList.add("page", "cart-page", "container");
  const mainTitle = getMainTitle("Моя корзина");

  const list = document.createElement("ul");
  list.classList.add("product-list", "list-reset");

  for (let i = 0; i < added.length; i++) {
    list.append(getCard(added[i], "remove"));
  }

  page.append(mainTitle, list);

  if (added.length == 0) page.append(getDesc("Корзина пуста"));
  else {
    let link = document.createElement("a");
    link.href = "";
    link.classList.add("btn1");
    link.textContent = "Подтвердить заказ (форма)";
    link.addEventListener("click", function (event) {
      event.preventDefault();
      navigation("confirmation");
    });
    page.append(link);
  }
  return page;
}
