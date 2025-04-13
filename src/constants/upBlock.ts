import { IUpblock } from "interfaces";
import { generateIdFromObject } from "libs";

const upBlockSmall: Omit<IUpblock, "id">[] = [
  {
    text: "Дрова всегда в наличии",
  },
  {
    text: "Для юридических и физических лиц",
  },
  {
    text: "С доставкой по Могилёвской области",
  },
  {
    text: "Бесплатная погрузка и выгрузка самосвалом",
  },
];

export const upBlock = generateIdFromObject(upBlockSmall);
