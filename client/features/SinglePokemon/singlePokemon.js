import React from 'react';
import { useSelector } from 'react-redux';
import uuid4 from "uuid4";
import AOS from 'aos';
AOS.init();
import { selectPokemon } from './singlePokemonSlice';
import Stats from './stats';
import Moves from './moves';

/**
 * COMPONENT
 */
const SinglePokemon = () => {
    let singlePokemon = useSelector(selectPokemon);

    return (
        <div>
            {(singlePokemon.name)?
            <div>
                <h1>{singlePokemon.name}</h1>
                <img key={uuid4()} src={singlePokemon.sprites.front_default}/>
                <h2>Types</h2>
                <ul>
                    {singlePokemon.types.map((type) => <li>{type.type.name}</li> )}
                </ul>
                <Stats data={singlePokemon.stats} />
                <Moves data={singlePokemon.moves} />
            </div>
            : <></>}
        </div>
    );
};

export default SinglePokemon;
