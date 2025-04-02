import { IMenu } from "../../../Interfaces/IMenu"

interface IItemProps {
    item: IMenu
}

const Item: React.FC<IItemProps> = ({ item: { id, link, name } }) => {
    return (
        <li key={id}>
            <a href={link} className="text-lg text-white font-bold">
                {name}
            </a>
        </li>
    )
}
export default Item