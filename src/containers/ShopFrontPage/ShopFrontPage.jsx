import React from "react";
import { Root } from "./ShopFrontPage.ui";

function ShopFrontPage({children}) {
    return (
        <Root>
            <div>{children}</div>
        </Root>
    )
}

export default ShopFrontPage