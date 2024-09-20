import React from "react";

type CardContainerProps = React.ComponentProps<'div'>

export const FormContainer = ({children}: CardContainerProps) => {
    return <div className="p-4 rounded-lg bg-gray-300 w-96">{children}</div>
}