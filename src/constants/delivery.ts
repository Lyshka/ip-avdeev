import { IDelivery } from "interfaces";
import { generateIdFromObject } from "libs/utils";

const deliverySmall: Omit<IDelivery, "id">[] = [
  {
    text: "Время доставки дров — от одного до трёх дней",
  },
  {
    text: "Стоимость доставки зависит от вашего местоположения и обсуждается при заказе",
  },
  {
    text: "Берём на себя погрузку дров и разгрузку  самосвалом",
  },
  {
    text: "Даём гарантию точного объема (плотный м.куб.)",
  },
  {
    text: "Принимаем оплату наличными и по безналичному расчёту",
  },
  {
    text: "Работаем как с физическими лицами, так и с юридическими",
  },
];

export const delivery = generateIdFromObject(deliverySmall);
