import { IMenu } from "interfaces/index"

interface IItemProps {
    item: IMenu
}

export const MenuItem: React.FC<IItemProps> = ({ item: { link, name } }) => {
    return (
        <li>
            <a href={link} className="text-lg text-white font-bold hover:opacity-80">
                {name}
            </a>
        </li>
    )
}