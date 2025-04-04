import { IContact } from "../Interfaces/IContact";
import { TelLinkFormmater } from "../lib/TelLinkFormatter";

const contactSmall: Omit<IContact, "id" | "social" | "link">[] = [
  {
    tel: "+375 29 678-74-63",
  },
  {
    tel: "+375 29 218-61-51",
  },
];

export const contact: IContact[] = contactSmall.map((item, idx) => {
  const telLinkFormmater = new TelLinkFormmater(item.tel);

  const link = telLinkFormmater.getTelLink();
  const telegram = telLinkFormmater.getTelegramLink();
  const viber = telLinkFormmater.getViberLink();
  const whatsup = telLinkFormmater.getWhatsupLink();

  return {
    id: idx + 1,
    ...item,
    link,
    social: {
      telegram,
      viber,
      whatsup,
    },
  };
});
