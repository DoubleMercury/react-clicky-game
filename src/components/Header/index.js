import React from "react";
import "./Header.css";

function Header(props) {
    return (
        <div className="header">
        <div className="title">{props.children}</div>
        <div className="scores">
            Total Score: {props.score} Highest Score: {props.highScore}
        </div>
    </div>
    );

}

export default Header;