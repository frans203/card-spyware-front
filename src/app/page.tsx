"use client";

import {FormContainer, FormInput, FormTitle} from "@/app/components/Form/Form";
import {FormSubmit} from "@/app/components/Form/FormSubmit";
import {FormProvider} from "@/app/components/Form/FormProvider";
import {CardList} from "@/app/components/CardList/CardListContainer";
import {CardListProvider} from "@/app/components/CardList/CardListProvider";

export default function Home() {
    return (
        <div className="container mx-auto flex flex-col items-center justify-center gap-10 no-scrollbar">
            <CardListProvider>

                <FormProvider>
                    <FormContainer>
                        <FormTitle>Add a card</FormTitle>
                        <FormInput placeholder="Ex: Iguatemi" label={"Owner"} property={"name"}/>
                        <FormInput placeholder="MM/YYYY" label={"Date"} property={"date"}/>
                        <FormInput placeholder="XXXX YYYY ZZZZ WWWW" label={"Number"} property={"number"}/>
                        <FormInput placeholder="XXX" label={"CVV"} property={"code"}/>
                        <FormSubmit>Save Card Safely</FormSubmit>
                    </FormContainer>
                </FormProvider>

                <CardList/>
            </CardListProvider>
        </div>
    );
}
