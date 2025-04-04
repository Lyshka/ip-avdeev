import { IMenu } from "interfaces";

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

export const menu: IMenu[] = menuSmall.map((item, idx) => ({
  id: idx + 1,
  ...item,
}));
