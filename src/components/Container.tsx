import { IChildren } from "../Interfaces/IChildren"

const Container: React.FC<IChildren> = ({ children }) => {
    return (
        <div className="max-w-container w-full mx-auto">
            {children}
        </div>
    )
}
export default Container