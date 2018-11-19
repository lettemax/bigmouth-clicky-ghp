import React from "react";
import "./Card.css";

const Card = props => (
    <div className="col-md-3">
        <div className="card mb-5">
            <img className="card-img-top" src={props.image} 
                alt="BM char" onClick={props.handleClick} 
                name={props.name} id={props.id}
            />
        </div>
    </div>
)

export default Card;
