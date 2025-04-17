import { TelIcon, TelegramIcon, ViberIcon, WhatsupIcon } from "icons";
import { IContact } from "interfaces"

export const TelItem: React.FC<IContact> = ({ link, social, tel }) => {
    return (
        <li className="flex items-center gap-2">
            <a href={link} className="flex items-center gap-2 font-semibold text-2xl">
                <TelIcon width={28} height={28} className="shrink-0" />

                {tel}
            </a>

            <ul className="flex items-center gap-2">
                <li>
                    <a href={social.viber} className="itemLinkSocial">
                        <ViberIcon width={30} height={30} />
                    </a>
                </li>

                <li>
                    <a href={social.telegram} className="itemLinkSocial">
                        <TelegramIcon width={30} height={30} />
                    </a>
                </li>

                <li>
                    <a href={social.whatsup} className="itemLinkSocial">
                        <WhatsupIcon width={30} height={30} />
                    </a>
                </li>
            </ul>
        </li>
    )
}