import React from "react";

type FormTitle = React.ComponentProps<'h2'>

export const FormTitle = ({children}: FormTitle) => {
    return <h2 className="text-3xl font-bold text-gray-900">{children}</h2>
}