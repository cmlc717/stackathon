import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid4 from "uuid4";
import AOS from 'aos';
AOS.init();
import { fetchSinglePokemon, selectPokemon } from '../pokemon/singlePokemonSlice';
import SinglePokemon from '../pokemon/singlePokemon';

/**
 * COMPONENT
 */
const Home = () => {
  const dispatch = useDispatch();
  let singlePokemon = useSelector(selectPokemon);
  let [pokemonName, setPokemonName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSinglePokemon(pokemonName.toLowerCase()));
  }

  return (
    <div>
      <h2>Find a Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemonName">Pokemon Name: </label>
        <input name="pokemonName" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)}/>

        <button type="submit">Search</button>
      </form>
      <SinglePokemon />
    </div>
  );
};

export default Home;
