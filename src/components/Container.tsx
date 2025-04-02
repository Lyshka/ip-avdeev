import React from "react";
import { cn } from "../lib/utils";

interface IContainerProps extends React.HTMLProps<HTMLDivElement> { }

const Container: React.FC<React.PropsWithChildren<IContainerProps>> = ({ children, ...rest }) => {
    return (
        <div {...rest} className={cn("max-w-container w-full mx-auto", rest.className)}>
            {children}
        </div>
    );
}

export default Container;