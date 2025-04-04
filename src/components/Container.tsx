import React from "react";
import { cn } from "libs";

interface IContainerProps extends React.HTMLProps<HTMLDivElement> { }

export const Container: React.FC<React.PropsWithChildren<IContainerProps>> = ({ children, ...rest }) => {
    return (
        <div {...rest} className={cn("max-w-container w-full mx-auto", rest.className)}>
            {children}
        </div>
    );
}