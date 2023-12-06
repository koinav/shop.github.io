import { getProductCard } from "./productCard.js";

export function getCard(number, mod) {
  switch (number) {
    case 1:
      return getProductCard(
        "../images/img1.jpeg",
        "Наушники дорогие",
        1,
        "44 000",
        mod
      );

    case 2:
      return getProductCard(
        "../images/img2.jpeg",
        "Наушники детские",
        2,
        "1 200",
        mod
      );

    case 3:
      return getProductCard(
        "../images/img3.jpeg",
        "Наушники черные",
        3,
        "2 500",
        mod
      );

    case 4:
      return getProductCard(
        "../images/img4.jpeg",
        "Наушники белые",
        4,
        "4 100",
        mod
      );

    case 5:
      return getProductCard(
        "../images/img5.jpeg",
        "Микрофон дорогой",
        5,
        "11 000",
        mod
      );

    case 6:
      return getProductCard(
        "../images/img6.jpeg",
        "Микрофон красивый",
        6,
        "9 200",
        mod
      );

    case 7:
      return getProductCard(
        "../images/img7.jpeg",
        "Микрофон дешевый",
        7,
        "3 220",
        mod
      );

    case 8:
      return getProductCard(
        "../images/img8.jpeg",
        "Микрофон обычный",
        8,
        "4 300",
        mod
      );

    case 9:
      return getProductCard(
        "../images/img9.jpeg",
        "Пауэрбанк Маленький",
        9,
        "1 100",
        mod
      );

    case 10:
      return getProductCard(
        "../images/img10.jpeg",
        "Пауэрбанк белый",
        10,
        "900",
        mod
      );

    case 11:
      return getProductCard(
        "../images/img11.jpeg",
        "Пауэрбанк дорогой",
        11,
        "2 300",
        mod
      );

    case 12:
      return getProductCard(
        "../images/img12.jpeg",
        "Пауэрбанк черный",
        12,
        "950",
        mod
      );
  }
}
