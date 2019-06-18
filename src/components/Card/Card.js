import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card" onClick={() =>  props.clickCount(props.id)}>
        <div className="img-container">
            <img className="card-image" src={props.image} />
        </div>
    </div>
)