import React from "react";
import { Root } from "./ShopFrontPage.ui";
import RootLayout from "../../components/RootLayout"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ShopGoodsList from "../ShopGoodsList"

function ShopFrontPage() {
    return (
        <Root>
            <RootLayout
            header={<Header title="My shop"/>}
            footer={<Footer title="Footer"/>}
            content={<ShopGoodsList/>}
            sidebar={<div>Sidebar</div>}
            />
        </Root>
    )
}

export default ShopFrontPage