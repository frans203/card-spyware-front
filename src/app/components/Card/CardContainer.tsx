import React from "react";
import {Inconsolata} from "next/font/google";

type CardRootProps = React.ComponentProps<'div'>

const inconsolata = Inconsolata({
    subsets: ['latin'],
    weight: ["200", "300", "400", "500", "600"]
});

export const CardContainer = ({children}: CardRootProps) => {
    return <div
        className={`${inconsolata.className} w-96 h-56 bg-cover text-gray-50 relative rounded-2xl bg-no-repeat bg-[url('/assets/images/base-card.png')]`}>
        {children}
    </div>
}