import { IMenu, IMenuSmall } from "../Interfaces/IMenu";

const menuSmall: IMenuSmall[] = [
  {
    name: "Продукция",
    link: "#",
  },
  {
    name: "Доставка",
    link: "#",
  },
  {
    name: "Отзывы",
    link: "#",
  },
  {
    name: "Фотогалерея",
    link: "#",
  },
  {
    name: "Вопрос-ответ",
    link: "#",
  },
  {
    name: "Контакты",
    link: "#",
  },
];

export const menu: IMenu[] = menuSmall.map((item, idx) => ({
  id: idx + 1,
  ...item,
}));
