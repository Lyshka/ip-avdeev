import { menu } from "../../../constant/menu"
import Item from "./Item"

const Menu = () => {
    return (
        <nav>
            <ul className="flex items-center gap-16">
                {menu.map((item) => (
                    <Item item={item} />
                ))}
            </ul>
        </nav>
    )
}
export default Menu