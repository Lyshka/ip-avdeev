import { cn } from "libs"

export const Button: React.FC<React.ComponentProps<'button'>> = ({ children, type = "button", ...props }) => {
    return (
        <button 
            {...props} 
            type={type} 
            className={cn("bg-green w-fit px-14 py-3.5 rounded-md font-robotoFlex font-bold text-lg text-center text-white", props.className)}
        >
            {children}
        </button>
    )
}