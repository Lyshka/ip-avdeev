import { IAddress } from "interfaces";
import { generateIdFromObject } from "libs/utils";

const addressSmall: Omit<IAddress, "id">[] = [
  {
    title: "Адрес склада:",
    desc: "Могилёвская обл., Могилёвский р-н, д. Старое Пашково, ул. Зеленая, 1а",
  },
  {
    title: "Почтовый адрес:",
    desc: "212022, г. Могилёв, ул. Космонавтов, д. 4, кв. 30",
  },
  {
    title: "Юридический адрес:",
    desc: "Витебская обл., г. Городок, ул. Корженевского, д.13",
  },
];

export const address = generateIdFromObject(addressSmall);
