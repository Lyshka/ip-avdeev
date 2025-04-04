import { cn } from "libs/utils"

export const Button: React.FC<React.PropsWithChildren<React.HTMLProps<HTMLButtonElement>>> = ({ children, type = "button", ...props }) => {
    return (
        <button {...props} className={cn("bg-green w-full px-14 py-3.5 rounded-md font-robotoFlex font-bold text-lg text-center text-white", props.className)}>
            {children}
        </button>
    )
}