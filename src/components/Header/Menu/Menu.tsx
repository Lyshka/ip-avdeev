import { menu } from "constants"
import { MenuItem } from "components/Header"

export const Menu = () => {
    return (
        <nav>
            <ul className="flex items-center gap-11">
                {menu.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </ul>
        </nav>
    )
}