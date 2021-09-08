import React from "react";
import ShopFrontPageBase from ".";

export function ShopFrontPage () {
    return <ShopFrontPageBase/>
}

export function ShopFrontPageWithCards () {
    return <ShopFrontPageBase> 
        <div></div>
    </ShopFrontPageBase>;
}

export default {
    title: "containers/ShopFrontPage"
}