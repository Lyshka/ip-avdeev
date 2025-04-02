import { IChildren } from "../Interfaces/IChildren"

const Container: React.FC<IChildren> = ({ children }) => {
    return (
        <div className="max-w-spacing">
            {children}
        </div>
    )
}
export default Container