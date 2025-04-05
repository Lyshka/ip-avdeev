import { cn } from "libs/utils"

export const Input: React.FC<React.HTMLProps<HTMLInputElement>> = ({ ...props }) => {
    return (
        <input {...props} className={cn("w-full bg-white focus-within:border-gray-31 border border-transparent rounded-md placeholder:text-gray-69 p-3.5 font-robotoFlex", props.className)} />
    )
}