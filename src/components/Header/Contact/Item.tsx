import { IContact } from "../../../Interfaces/IContact";
import TelIcon from "../../../icons/TelIcon";
import TelegramIcon from "../../../icons/TelegramIcon";
import ViberIcon from "../../../icons/ViberIcon";
import WhatsupIcon from "../../../icons/WhatsupIcon";

interface IItemProps {
    item: IContact;
}

const Item: React.FC<IItemProps> = ({ item: { link, social, tel } }) => {
    return (
        <li className="flex items-center gap-2">
            <a href={link} className="flex items-center gap-2 font-semibold text-xl text-white hover:opacity-80">
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
export default Item