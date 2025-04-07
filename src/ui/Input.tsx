import { cn } from "libs/utils"

export const Input: React.FC<React.HTMLProps<HTMLInputElement>> = ({ ...props }) => {
    return (
        <input {...props} className={cn("inputForm", props.className)} />
    )
}