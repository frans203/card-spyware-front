import {Card} from "@/types/Card";
import React, {ReactNode, useContext, useEffect} from "react";
import {getCardsFromLocalStorage} from "@/tools/localstorage";

type CardListContextType = {
    cards: Card[],
    setCards: React.Dispatch<React.SetStateAction<Card[]>>,
}

export const CardListContext =
    React.createContext<CardListContextType | null>(null);

export const useCardListContext = () => {
    const context = useContext(CardListContext);

    if (!context) {
        throw new Error('useCardListContext needs to be inside a CardProvider');
    }

    return context;
}

export const CardListProvider = ({children}: { children: ReactNode }) => {

    const [cards, setCards] = React.useState<Card[]>([]);

    useEffect(() => {
        const cardsFromLocalStorage = getCardsFromLocalStorage();

        setCards(cardsFromLocalStorage)
    }, []);

    return <CardListContext.Provider value={{cards, setCards}}>
        {children}
    </CardListContext.Provider>
}