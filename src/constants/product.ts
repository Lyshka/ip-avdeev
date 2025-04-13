import { product as productImg, product3, product2 } from "imgs";
import { IProduct } from "interfaces";
import { generateIdFromObject } from "libs";

const productSmall: Omit<IProduct, "id">[] = [
  {
    title: "Горбыль",
    desc: "Хвойных пород (ель, сосна) длина 4 м,<br> а также порезанный на дрова до 40 см,<br> либо длина под заказ",
    img: productImg,
    price: 20,
  },
  {
    title: "Дрова, порезанные на поленья",
    desc: "Лиственных (береза, осина) и хвойных пород (ель, сосна) до 40 см (средний размер), либо длина под заказ",
    img: product2,
    price: 20,
  },
  {
    title: "Колотые дрова",
    desc: "Лиственных (береза, осина) и хвойных пород (ель, сосна) средних размеров, либо длина под заказ",
    img: product3,
    price: 20,
  },
];

export const product = generateIdFromObject(productSmall);
