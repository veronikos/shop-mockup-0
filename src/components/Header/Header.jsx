import React from "react";
import "./Header.css"

function Header({ title }) {
    return <div id="AppHeader">
        <span>{title}</span>
    </div>
}

export default Header