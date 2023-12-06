import { getHeader } from "./components/header.js";
import { getPageContainer } from "./components/pageContainer.js";

const app = document.getElementById("app");

const header = getHeader();
const pageContainer = getPageContainer();

export async function navigation(page) {
  pageContainer.innerHTML = "";
  switch (page) {
    case "catalog":
      const catalogModule = await import("./pages/catalogPage.js");
      const catalogPage = catalogModule.getCatalogPage();
      pageContainer.append(catalogPage);
      break;
    case "cart":
      const cartModule = await import("./pages/cartPage.js");
      const cartPage = cartModule.getCartPage();
      pageContainer.append(cartPage);
      break;
    case "confirmation":
      const confirmationModule = await import("./pages/confirmationPage.js");
      const confirmationPage = confirmationModule.getConfirmationPage();
      pageContainer.append(confirmationPage);
      break;
    case "final":
      const finalModule = await import("./pages/finalPage.js");
      const finalPage = finalModule.getFinalPage();
      pageContainer.append(finalPage);
      break;
    default:
      const mainModule = await import("./pages/mainPage.js");
      const mainPage = mainModule.getMainPage();
      pageContainer.append(mainPage);
      break;
  }
}

navigation();

app.append(header, pageContainer);
