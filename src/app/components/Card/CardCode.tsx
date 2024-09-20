import React from "react";

type CardCodeProps = React.ComponentProps<'p'>;

export const CardCode = ({children}: CardCodeProps) => {
    return <p
        className="absolute bottom-5 left-[30%] text-lg whitespace-nowrap">{children}</p>
}