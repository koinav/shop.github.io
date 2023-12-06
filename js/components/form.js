import { getDesc1 } from "../components/desc.js";
import { navigation } from "../main.js";
import { emptyCart } from "../pages/cartPage.js";

export function getForm() {
  const form = document.createElement("form");
  form.classList.add("form");
  form.id = "form";
  form.action = "https://www.bing.com/search?";
  form.target = "_blank";

  const comment1 = getDesc1("Ваше имя:");

  const nameForm = document.createElement("input");
  nameForm.classList.add("nameForm");
  nameForm.type = "text";
  nameForm.id = "name";
  nameForm.name = "customers_name";
  nameForm.placeholder = "Имя";

  const comment2 = getDesc1("Промокод:");

  const promoForm = document.createElement("input");
  promoForm.classList.add("nameForm");
  promoForm.type = "number";
  promoForm.id = "promocode";
  promoForm.name = "customers_promocode";
  promoForm.placeholder = "12345";

  const comment3 = getDesc1("Способ доставки:");

  const delivery = document.createElement("input");
  delivery.classList.add("radio");
  delivery.type = "radio";
  delivery.id = "inPerson";
  delivery.name = "delivery";
  delivery.value = "inPerson";

  const label = document.createElement("label");
  label.classList.add("label");
  label.for = "inPerson";
  label.textContent = "Самовывоз";

  const delivery1 = document.createElement("input");
  delivery1.classList.add("radio");
  delivery1.type = "radio";
  delivery1.id = "courier";
  delivery1.name = "delivery";
  delivery1.value = "courier";

  const label1 = document.createElement("label");
  label1.classList.add("label");
  label1.for = "courier";
  label1.textContent = "Курьером";

  const delivery2 = document.createElement("input");
  delivery2.classList.add("radio");
  delivery2.type = "radio";
  delivery2.id = "post";
  delivery2.name = "delivery";
  delivery2.value = "post";

  const label2 = document.createElement("label");
  label2.classList.add("label");
  label2.for = "post";
  label2.textContent = "Почтой";

  const button = document.createElement("button");
  button.classList.add("confBtn");
  button.type = "submit";
  button.textContent = "Подтвердить заказ";

  button.addEventListener("click", function (event) {
    event.preventDefault();
    send(form);
  });

  form.append(
    comment1,
    nameForm,
    comment2,
    promoForm,
    comment3,
    delivery,
    label,
    delivery1,
    label1,
    delivery2,
    label2,
    button
  );

  return form;
}

async function send(form) {
  const data = new FormData(form);
  const name = data.get("customers_name");
  const promo = data.get("customers_promocode");
  const delivery = data.get("delivery");
  console.log(name, promo, delivery);

  if (name && promo && delivery) {
    form.submit();
    emptyCart();
    navigation("final");

    var oReq = new XMLHttpRequest();
    oReq.open("POST", "https://www.bing.com", true);
    oReq.onload = function (oEvent) {
      if (oReq.status == 200) {
        console.log("ok");
      } else {
        console.log("not ok");
      }
    };

    oReq.send(data);
  } else {
    alert("Требуется заполнить все поля формы!");
  }
}
