import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid4 from "uuid4";
import AOS from 'aos';
AOS.init();


/**
 * COMPONENT
 */
const Compare = () => {
  const dispatch = useDispatch();
  let pokemon1
  let pokemon2 
  let [pokemonName1, setPokemonName1] = useState("");
  let [pokemonName2, setPokemonName2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch();
  }

  return (
    <div>
      <h2>Compare Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemonName1">Pokemon Name: </label>
        <input name="pokemonName1" value={pokemonName1} onChange={(e) => setPokemonName1(e.target.value)}/>

        <label htmlFor="pokemonName2">Pokemon Name: </label>
        <input name="pokemonName2" value={pokemonName2} onChange={(e) => setPokemonName2(e.target.value)}/>

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Compare;
