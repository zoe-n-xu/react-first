import React from 'react';

const Card = (props) => {
    return (
        <div className="bg-light-green tc dib br3 pa3 ma2 grow shadow-5">
            <img alt="robo" src={`https://robohash.org/${props.name}?100*100`}></img>
            <div>
            <h1>{props.name}</h1>
            <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;