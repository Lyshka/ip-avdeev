import React from "react";
import { cn } from "libs";
import { IContainer } from "interfaces";

export const Container: React.FC<IContainer> = ({ children, ...props }) => {
    return (
        <div {...props} className={cn("max-w-container w-full mx-auto", props.className)}>
            {children}
        </div>
    );
}