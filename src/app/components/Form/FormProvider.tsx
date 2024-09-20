import {Card} from "@/types/Card";
import React, {createContext, ReactNode, useContext, useState} from "react";

type FormContextType = {
    card: Card;
    setCard: React.Dispatch<React.SetStateAction<Card>>
}

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = (): FormContextType => {
    const context = useContext(FormContext);

    if (context === undefined) {
        throw new Error('useFormContext needs to be inside a FormProvider')
    }

    return context;
}
export const FormProvider = ({children}: { children: ReactNode }) => {
    const [card, setCard] = useState<Card>(
        {
            name: "",
            code: "",
            number: "",
            date: ""
        });

    return <FormContext.Provider value={{card, setCard}}>
        {children}
    </FormContext.Provider>
}

