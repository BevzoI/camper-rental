import React from 'react';

const Camper = ({camper}) => {
    const {_id,price,adults} = camper;

    return (
        <div>
            <div>id: {_id}</div>
            <div>price: {price}</div>
            <div>adults: {adults}</div>
        </div>
    );
};

export {Camper};