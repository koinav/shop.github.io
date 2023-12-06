import { getProductCard } from "../components/productCard.js";
import { getMainTitle } from "../components/mainTitle.js";
import { getSubTitle } from "../components/subTitle.js";
import { getCard } from "../components/cards.js";

export function getCatalogPage() {
  const page = document.createElement("div");
  page.classList.add("page", "catalog-page", "container");
  const mainTitle = getMainTitle("Каталог товаров");

  const subTitle1 = getSubTitle("Наушники");
  const subTitle2 = getSubTitle("Микрофоны");
  const subTitle3 = getSubTitle("Пауэрбанки");

  const list1 = document.createElement("ul");
  list1.classList.add("product-list", "list-reset");
  list1.append(
    getCard(1, "add"),
    getCard(2, "add"),
    getCard(3, "add"),
    getCard(4, "add")
  );

  const list2 = document.createElement("ul");
  list2.classList.add("product-list", "list-reset");
  list2.append(
    getCard(5, "add"),
    getCard(6, "add"),
    getCard(7, "add"),
    getCard(8, "add")
  );

  const list3 = document.createElement("ul");
  list3.classList.add("product-list", "list-reset");
  list3.append(
    getCard(9, "add"),
    getCard(10, "add"),
    getCard(11, "add"),
    getCard(12, "add")
  );

  page.append(mainTitle, subTitle1, list1, subTitle2, list2, subTitle3, list3);

  return page;
}
