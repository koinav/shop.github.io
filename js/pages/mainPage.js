import { getMainTitle } from "../components/mainTitle.js";
import { getSubTitle } from "../components/subTitle.js";
import { getDesc } from "../components/desc.js";
import { getImg } from "../components/image.js";
import { getCard } from "../components/cards.js";

export function getMainPage() {
  const page = document.createElement("div");
  page.classList.add("page", "main-page", "container");
  const mainTitle = getMainTitle("Наш ассортимент");
  mainTitle.id = "main1";

  const subTitle1 = getSubTitle("Наушники");
  subTitle1.id = "headphones";

  const list1 = document.createElement("ul");
  list1.classList.add("photos");
  list1.append(
    getImg("./images/img1.jpeg", "Наушники дорогие"),
    getImg("./images/img3.jpeg", "Наушники дешевые")
  );

  const desc1 = getDesc(
    " Наушники - это неотъемлемая часть повседневной жизни современного человека. Они помогают нам наслаждаться любимой музыкой, проводить видео- и аудио-звонки, слушать аудиокниги и подкасты, играть в игры, смотреть фильмы и многое другое, не беспокоя окружающих. Благодаря наушникам, мы можем насладиться отличным звуком и не отвлекаться от окружения, ураганом жизненной активности и человеческих историй. Наушники различаются по своему типу, качеству звука, удобству использования, дизайну. В магазине мы предлагаем широкий ассортимент наушников: беспроводных, проводных, наушников-вкладышей, накладных, с шумоподавлением и многие другие. Вы сможете найти именно те наушники, которые подойдут именно вам и вашему образу жизни. У нас вы найдете наушники от ведущих производителей по выгодным ценам. Не откладывайте на потом, приобретите качественные наушники уже сейчас и обогатите свою жизнь новыми звуковыми впечатлениями."
  );
  const subTitle2 = getSubTitle("Микрофоны");
  subTitle2.id = "micro";

  const list2 = document.createElement("ul");
  list2.classList.add("photos");
  list2.append(
    getImg("./images/img5.jpeg", "Микрофон 1"),
    getImg("./images/img6.jpeg", "Микрофон 2")
  );

  const desc2 = getDesc(
    "Микрофоны - это важный инструмент в жизни каждого человека, который любит выражать себя через звук. Они необходимы для проведения презентаций, речей, записи музыки и аудио, проведения видео-конференций, стриминга в социальных сетях, а также для проведения вебинаров и онлайн-обучения. Каждый момент вашего голоса и звука будет передан наивысшим качеством с использованием качественного микрофона. В нашем магазине вы найдете широкий ассортимент микрофонов различных типов: USB-микрофоны, конденсаторные микрофоны, динамические микрофоны, безпроводные микрофоны, радиосистемы и многое другое. Мы работаем с ведущими производителями, чтобы предложить вам только качественные микрофоны по доступным ценам. Не откладывайте на потом, приобретите качественный микрофон уже сейчас и позвольте своему голосу зазвучать так, как вы хотите."
  );

  const subTitle3 = getSubTitle("Пауэрбанки");
  subTitle3.id = "power";

  const list3 = document.createElement("ul");
  list3.classList.add("photos");
  list3.append(
    getImg("./images/img11.jpeg", "Микрофон 1"),
    getImg("./images/img12.jpeg", "Микрофон 2")
  );

  const desc3 = getDesc(
    "Пауэрбанки - это незаменимые аксессуары для современного человека, всегда в движении и на связи. Независимо от того, заняты ли вы работой, путешествием, спортом или просто наслаждаетесь свободным временем - пауэрбанк всегда будет рядом, готовый поддержать ваши устройства, когда им это необходимо. В нашем интернет-магазине вы найдете широкий выбор пауэрбанков различной емкости - от компактных моделей для повседневного использования до мощных устройств, способных заряжать несколько устройств одновременно. Мы предлагаем пауэрбанки с различными интерфейсами и функционалом, такими как быстрая зарядка, беспроводная зарядка, поддержка Quick Charge и многое другое. Не допустите ситуацию, когда ваш смартфон или планшет останутся без заряда в самый неподходящий момент. Приобретите пауэрбанк и будьте уверены, что ваши гаджеты всегда будут на связи."
  );

  let link0 = document.createElement("a");
  link0.href = "#main1";
  link0.classList.add("navig");
  link0.textContent = "Навигация:";

  let link1 = document.createElement("a");
  link1.href = "#headphones";
  link1.classList.add("btn1");
  link1.textContent = "Наушники";

  let link2 = document.createElement("a");
  link2.href = "#micro";
  link2.classList.add("btn1");
  link2.textContent = "Микрофоны";

  let link3 = document.createElement("a");
  link3.href = "#power";
  link3.classList.add("btn1");
  link3.textContent = "Пауэрбанки";

  page.append(
    link0,
    link1,
    link2,
    link3,
    mainTitle,
    subTitle1,
    list1,
    desc1,
    subTitle2,
    list2,
    desc2,
    subTitle3,
    list3,
    desc3
  );

  return page;
}
