import React from "react";

type CardNameProps = React.ComponentProps<'p'>;

export const CardName = ({children}: CardNameProps) => {
    return <p
        className="absolute bottom-10 left-[8%] text-lg whitespace-nowrap">{children}</p>
}