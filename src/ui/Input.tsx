import { cn } from "libs/utils"
import React from "react"

export const Input = React.forwardRef<HTMLInputElement, React.HTMLProps<HTMLInputElement>>(
    ({ ...props }, ref) => {
        return (
            <input {...props} ref={ref} className={cn("inputForm", props.className)} />
        );
    }
);