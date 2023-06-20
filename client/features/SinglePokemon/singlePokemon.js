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
            {singlePokemon==="rejected"? 
                <p>
                    This pokemon does not exist.
                    <img id = "rejected" src="/rotom-cry.gif" />
                </p>
            :<></>}
            {singlePokemon==="pending"? 
                <p>
                    ...Loading...
                    <img id = "loading" src="/loading.gif"/>
                </p>
            :<></>}
            {singlePokemon.name?
            <div data-aos='zoom-in'>
                <h1>{singlePokemon.name}</h1>
                <img src={singlePokemon.sprites.front_default}/>
                <img src={singlePokemon.sprites.back_default}/>
                <img src={singlePokemon.sprites.front_shiny}/>
                <img src={singlePokemon.sprites.back_shiny}/>
                <h2>Types</h2>
                <ul className='types'>
                    {singlePokemon.types.map((type) => <li key={uuid4()} className={type.type.name}>{type.type.name}</li> )}
                </ul>
                <Stats data={singlePokemon.stats} />
                <Moves data={singlePokemon.moves} />
            </div>:<p>Search a pokemon</p>}
        </div>
    );
};

export default SinglePokemon;
