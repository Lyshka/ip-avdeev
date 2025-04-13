import { IEdge } from "interfaces";
import { generateIdFromObject } from "libs";
import { EdgeIcon, EdgeIcon2, EdgeIcon3, EdgeIcon4 } from "icons";

const edgeSmall: Omit<IEdge, "id">[] = [
  {
    icon: EdgeIcon,
    text: "качественные Дрова<br> без плесени и трухи",
  },
  {
    icon: EdgeIcon2,
    text: "Большой склад<br> дров - 200 м.куб.",
  },
  {
    icon: EdgeIcon3,
    text: "Собственное<br> производство",
  },
  {
    icon: EdgeIcon4,
    text: "95% клиентов, однажды заказав у нас, возвращаются снова",
  },
];

export const edge = generateIdFromObject(edgeSmall);
