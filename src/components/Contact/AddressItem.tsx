import { IAddress } from "interfaces"

export const AddressItem: React.FC<IAddress> = ({ desc, title }) => {
    return (
        <li className="text-xl">
            <p className="font-light">
                {title}
            </p>

            <address className="font-medium">
                {desc}
            </address>
        </li>
    )
}