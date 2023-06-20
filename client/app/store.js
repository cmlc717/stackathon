import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import singlePokemonReducer from "../features/SinglePokemon/singlePokemonSlice"
import twoPokemonReducer from '../features/ComparePokemon/compareSlice';
import movesReducer from '../features/SinglePokemon/movesSlice';

const store = configureStore({
  reducer: { 
    SinglePokemon: singlePokemonReducer,
    TwoPokemon: twoPokemonReducer, 
    Moves: movesReducer
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
