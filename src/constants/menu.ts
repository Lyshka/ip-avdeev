import { IMenu } from "interfaces";
import { generateIdFromObject } from "libs";

const menuSmall: Omit<IMenu, "id">[] = [
  {
    name: "Продукция",
    link: "#products",
  },
  {
    name: "Доставка",
    link: "#delivery",
  },
  {
    name: "Отзывы",
    link: "#reviews",
  },
  {
    name: "Фотогалерея",
    link: "#gallery",
  },
  {
    name: "Вопрос-ответ",
    link: "#quests",
  },
  {
    name: "Контакты",
    link: "#contact",
  },
];

export const menu = generateIdFromObject(menuSmall);
