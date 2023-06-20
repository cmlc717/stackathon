import React from 'react';

/**
 * COMPONENT
 */
const SingleMove = (props) => {
    const { move } = props;

    return (
        <tr className={`${move.type.name}`}>
            <td>{move.name}</td>
            <td>{move.type.name}</td>
            <td>{move.damage_class.name}</td>
            <td>{move.accuracy? move.accuracy:"n/a"}</td>
            <td>{move.power? move.power:"n/a"}</td>
            <td>{move.pp}</td>
            <td>{move.priority}</td>
            <td>{move.effect_entries[0]? move.effect_entries[0].short_effect:"n/a"}</td>
        </tr>
    );
};

export default SingleMove;
