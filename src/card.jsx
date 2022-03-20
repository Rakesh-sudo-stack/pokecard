import React from 'react';

const Card = (props) => {
    return(
        <>
        <div className="card" style={{width: `18rem`}}>
            <img className="card-img-top" src={props.image} alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.name} is {props.type} type pokemon</p>
            </div>
        </div>
        </>
    )
};

export default Card;