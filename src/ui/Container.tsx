import React from "react";
import { cn } from "libs";

export const Container: React.FC<React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>> = ({ children, ...props }) => {
    return (
        <div {...props} className={cn("max-w-container w-full mx-auto", props.className)}>
            {children}
        </div>
    );
}