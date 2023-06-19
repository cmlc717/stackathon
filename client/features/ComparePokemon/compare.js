import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid4 from "uuid4";
import AOS from 'aos';
AOS.init();
import { fetchTwoPokemon } from './compareSlice';
import TwoPokemon from './twoPokemon';

/**
 * COMPONENT
 */
const Compare = () => {
  const dispatch = useDispatch();
  let [pokemonName1, setPokemonName1] = useState("");
  let [pokemonName2, setPokemonName2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchTwoPokemon([pokemonName1.toLowerCase(), pokemonName2.toLowerCase()]));
  }

  return (
    <div className="tracking-in-expand">
      <h2>Compare Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemonName1">Pokemon Name: </label>
        <input name="pokemonName1" value={pokemonName1} onChange={(e) => setPokemonName1(e.target.value)}/>

        <label htmlFor="pokemonName2">Pokemon Name: </label>
        <input name="pokemonName2" value={pokemonName2} onChange={(e) => setPokemonName2(e.target.value)}/>

        <button type="submit">Search</button>
      </form>
      <TwoPokemon />
    </div>
  );
};

export default Compare;
