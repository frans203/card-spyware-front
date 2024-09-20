import React from "react";

type CardDateProps = React.ComponentProps<'p'>;

export const CardDate = ({children}: CardDateProps) => {
    return <p
        className="absolute bottom-5 left-[8%] text-lg whitespace-nowrap block">{children}</p>
}