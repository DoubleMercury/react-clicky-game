import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <div className="title">{props.children}</div>
        <div className="scores">
            Total Score: {props.score} Highest Score: {props.highScore}
        </div>
    </div>
)