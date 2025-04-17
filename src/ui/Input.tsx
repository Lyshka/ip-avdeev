import { cn } from "libs"
import { forwardRef } from "react"

export const Input = forwardRef<HTMLInputElement, React.HTMLProps<HTMLInputElement>>(
    ({ ...props }, ref) => {
        return (
            <input {...props} placeholder={props.placeholder ?? "Ваше имя"} ref={ref} className={cn("inputForm", props.className)} />
        );
    }
);