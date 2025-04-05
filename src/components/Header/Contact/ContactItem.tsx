import { IContact } from "interfaces/index";
import { TelIcon, TelegramIcon, ViberIcon, WhatsupIcon } from "icons";

interface IItemProps {
    item: IContact;
}

export const ContactItem: React.FC<IItemProps> = ({ item: { link, social, tel } }) => {
    return (
        <li className="flex items-center gap-2">
            <a href={link} className="flex items-center gap-2 font-semibold text-xl text-white">
                <TelIcon />

                {tel}
            </a>

            <ul className="flex items-center gap-2">
                <li>
                    <a href={social.viber} className="itemLinkSocial">
                        <ViberIcon />
                    </a>
                </li>

                <li>
                    <a href={social.telegram} className="itemLinkSocial">
                        <TelegramIcon />
                    </a>
                </li>

                <li>
                    <a href={social.whatsup} className="itemLinkSocial">
                        <WhatsupIcon />
                    </a>
                </li>
            </ul>
        </li>
    )
}