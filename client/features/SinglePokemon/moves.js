import React from 'react';
import uuid4 from "uuid4";
import AOS from 'aos';
AOS.init();

/**
 * COMPONENT
 */
const Moves = (props) => {
    const { data } = props;
    const moves = [];

    for (let i = 0; i < data.length; i++) {
        moves.push(data[i].move.name);
    }

    return (
        <div>
            <h2>Moveset</h2>
            <ul>
                {moves.map((move) => <li key={uuid4()}>{move}</li>)}
            </ul>
        </div>
    );
};

export default Moves;
