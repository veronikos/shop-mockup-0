import React from "react";
import { Root } from "./CardsList.ui";
import CardItem from "../CardItem";

function CardsList({data}) {
    return <Root>
        {data ? data.map((cardItemData) => (
        <CardItem 
            key={`${cardItemData.title}-${cardItemData.price}`}
            title={cardItemData.title}
            image={cardItemData.image}
            price={cardItemData.price}
        />
        )) : 'No items'}
    </Root>
}

export default CardsList