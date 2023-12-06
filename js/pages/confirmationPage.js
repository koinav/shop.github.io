import { getMainTitle } from "../components/mainTitle.js";
import { getForm } from "../components/form.js";

export function getConfirmationPage() {
  const page = document.createElement("div");
  page.classList.add("page", "product-page", "container");

  const mainTitle = getMainTitle("Подтверждение заказа");

  const form = getForm();

  page.append(mainTitle, form);

  return page;
}
