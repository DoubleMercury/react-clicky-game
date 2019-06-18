import React from "react";
import "./Card.css";

function Card(props) {
    return (
        <div className="card" onClick={() =>  props.counter(props.id)}>
        <div className="img-container">
            <img className="card-image" src={props.image} />
        </div>
    </div>
    );
}

export default Card;