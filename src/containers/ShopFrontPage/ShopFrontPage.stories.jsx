import React from "react";
import ShopFrontPageBase from ".";
import CardsList from "../../components/CardsList";
import {defaultData} from "../../components/CardsList/stories/dataMock"

export function ShopFrontPage () {
    return <ShopFrontPageBase/>
}

export function ShopFrontPageWithCards () {
    return <ShopFrontPageBase> 
        <CardsList data={defaultData}/>
    </ShopFrontPageBase>;
}

export default {
    title: "containers/ShopFrontPage"
}