import React from "react";

type CardNumberProps = React.ComponentProps<'p'>;

export const CardNumber = ({children}: CardNumberProps) => {
    return <p
        className="absolute bottom-[3.8rem] left-[8%] text-3xl whitespace-nowrap block">{children}</p>
}