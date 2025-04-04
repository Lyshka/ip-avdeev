import { IMenu } from "../../../Interfaces/IMenu"

interface IItemProps {
    item: IMenu
}

const Item: React.FC<IItemProps> = ({ item: { id, link, name } }) => {
    return (
        <li>
            <a href={link} className="text-lg text-white font-bold hover:opacity-80">
                {name}
            </a>
        </li>
    )
}
export default Item