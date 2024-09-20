import {LOCAL_STORAGE_KEY} from "@/constants/constants";
import {Card} from "@/types/Card";

type SaveLocalStorageType = {
    key: string;
    value: unknown
}

export const saveLocalStorage = ({key, value}: SaveLocalStorageType) => {
    window.localStorage.setItem(key, JSON.stringify(value))
}

export const getCardsFromLocalStorage = (): Card[] => {
    const jsonCards = window?.localStorage.getItem(LOCAL_STORAGE_KEY);

    if (jsonCards) {
        return JSON.parse(jsonCards)['cards'] as Card[];
    }

    return [];
}

export const saveCardOnLocalStorage = (card: Card) => {
    const currentCards = getCardsFromLocalStorage();

    saveLocalStorage({
        key: LOCAL_STORAGE_KEY, value: {
            cards: [...currentCards, card]
        }
    })
}

