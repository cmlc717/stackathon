import React from 'react';
import uuid4 from "uuid4";
import AOS from 'aos';
AOS.init();


/**
 * COMPONENT
 */
const TeamMember = (props) => {
    const { teamMember, i } = props;

    return (
        <div className={`member${i}`}>
            <h1>{teamMember.name}</h1>
            <img src={teamMember.sprites.front_default}/>
            <h2>Types</h2>
            <ul className='types'>
                {teamMember.types.map((type) => <li key={uuid4()} className={type.type.name}>{type.type.name}</li> )}
            </ul>
        </div>
    );
};

export default TeamMember;
