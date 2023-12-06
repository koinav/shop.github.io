import { getMainTitle } from "../components/mainTitle.js";
import { navigation } from "../main.js";

export function getFinalPage() {
  const page = document.createElement("div");
  page.classList.add("page", "product-page", "container");

  const mainTitle = getMainTitle("Заказ успешно оформлен");

  const button = document.createElement("button");
  button.classList.add("btn");
  button.textContent = "Вернуться к покупкам";
  button.addEventListener("click", function (event) {
    event.preventDefault();
    navigation("cart");
  });

  page.append(mainTitle, button);

  return page;
}
