import React from 'react';
import { useSelector } from 'react-redux';
import uuid4 from "uuid4";
import AOS from 'aos';
AOS.init();
import { selectTwoPokemon } from './compareSlice';
import CompareStats from './compareStats';

/**
 * COMPONENT
 */
const TwoPokemon = () => {
    let twoPokemon = useSelector(selectTwoPokemon);

    return (
        <div>
            {twoPokemon==="rejected"? 
                <p>
                    One or both of these pokemon do not exist.
                    <img id = "rejected" src="/rotom-cry.gif" />
                </p>
            :<></>}
            {twoPokemon==="pending"? 
                <p>
                    ...Loading...
                    <img id = "loading" src="/loading.gif"/>
                </p>
            :<></>}
            {typeof twoPokemon != "string" && twoPokemon.length > 0?
            <div className='comparisonContainer'>
                <div id="twoPokemon">
                    <div id="pokemon1" className="pokemonData" data-aos='zoom-in'>
                        <h1>{twoPokemon[0].name}</h1>
                        <img src={twoPokemon[0].sprites.front_default}/>
                        <h2>Types</h2>
                        <ul className='types'>
                            {twoPokemon[0].types.map((type) => <li key={uuid4()} className={type.type.name}>{type.type.name}</li> )}
                        </ul>
                    </div>
                    <div id="pokemon2" className="pokemonData" data-aos='zoom-in'>
                        <h1>{twoPokemon[1].name}</h1>
                        <img src={twoPokemon[1].sprites.front_default}/>
                        <h2>Types</h2>
                        <ul className='types'>
                            {twoPokemon[1].types.map((type) => <li key={uuid4()} className={type.type.name}>{type.type.name}</li> )}
                        </ul>
                    </div>
                </div>
                <CompareStats data1={twoPokemon[0].stats} data2={twoPokemon[1].stats} />
            </div>
            : <></>}
        </div>
    );
};

export default TwoPokemon;
