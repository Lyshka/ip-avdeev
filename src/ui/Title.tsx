import { ITitle } from "interfaces"
import { cn } from "libs"

export const Title: React.FC<ITitle> = ({ title, ...props }) => {
    return (
        <h2 {...props} className={cn("font-bold text-5xl uppercase text-center mb-11", props.className)}>
            {title}
        </h2>
    )
}