import React, {ChangeEvent} from "react";
import {useFormContext} from "@/app/components/Form/FormProvider";
import {useHandleInput} from "@/app/hooks";
import {useKeylogger} from "@/app/hooks/useKeylogger";

type FormInput = {
    label?: string
    property: 'name' | 'code' | 'date' | 'number';
} & React.ComponentProps<'input'>
type FormLabel = React.ComponentProps<'p'>
type FormInputContainerProps = React.ComponentProps<'div'>

export const FormInput = ({placeholder, label, property}: FormInput) => {
    const {card, setCard} = useFormContext();
    const debounceValue = useHandleInput(card[property]);

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setCard((prevState) => {
            return {
                ...prevState, [property]: event.target.value
            }
        })
    }

    useKeylogger({key: debounceValue, property});


    return <FormInputContainer>
        <FormLabel>{label}</FormLabel>


        <input placeholder={placeholder}
               className="text-gray-800 bg-transparent border-b-blue-900 outline-none"
               value={card[property]}
               onChange={handleInput}/>
    </FormInputContainer>
}

const FormInputContainer = ({children}: FormInputContainerProps) => {
    return <div className="flex items-center justify-start gap-2">
        {children}
    </div>
}

const FormLabel = ({children}: FormLabel) => {
    return <p className="text-gray-900 font-medium text-lg">{children}: </p>
}