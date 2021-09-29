import React from "react";
import { Root } from "./ShopFrontPage.ui";

function ShopFrontPage({children}) {
    return (
        <Root>
            <h2>Shop Front Page</h2>
            <div>{children}</div>
        </Root>
    )
}

export default ShopFrontPage