import React from 'react';
import Card from './Card';

const CardsList = ({robos}) => {
    const CardArray = robos.map((robo, index) => {
        return <Card key={robo.name} name={robo.name} email={robo.email} />;
    });
    return CardArray;
}

export default CardsList;