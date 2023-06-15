import React from 'react';
import { useSelector } from 'react-redux';
import uuid4 from "uuid4";
import AOS from 'aos';
AOS.init();
import { selectPokemon } from '../pokemon/singlePokemonSlice';

/**
 * COMPONENT
 */
const SinglePokemon = () => {
    let singlePokemon = useSelector(selectPokemon);

    return (
        <div>
        {(singlePokemon.sprites)?
        <img key={uuid4()} src={singlePokemon.sprites.front_default}/>: <></>}
        </div>
    );
};

export default SinglePokemon;
