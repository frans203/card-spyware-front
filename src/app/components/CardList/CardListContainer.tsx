import React from "react";
import {useCardListContext} from "@/app/components/CardList/CardListProvider";
import {CardNumber} from "@/app/components/Card/CardNumber";
import {CardName} from "@/app/components/Card/CardName";
import {CardDate} from "@/app/components/Card/CardDate";
import {CardCode} from "@/app/components/Card/CardCode";
import {CardContainer} from "@/app/components/Card/Card";

type CardListProps = React.ComponentProps<'div'>

export const CardList = ({}: CardListProps) => {
    const {cards} = useCardListContext();
    const reversedCards = [...cards].reverse();

    return <CardListContainer>
        {reversedCards.map((card, index) => {
            return <CardContainer key={index}>
                <CardNumber>{card.number}</CardNumber>
                <CardName>{card.name}</CardName>
                <CardDate>{card.date}</CardDate>
                <CardCode>{card.code}</CardCode>
            </CardContainer>
        })}
    </CardListContainer>
}

export const CardListContainer = ({children}: CardListProps) => {
    return <div className="flex flex-col gap-5">
        {children}
    </div>
}