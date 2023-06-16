import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import singlePokemonReducer from "../features/SinglePokemon/singlePokemonSlice"
import twoPokemonReducer from '../features/ComparePokemon/compareSlice';
const store = configureStore({
  reducer: { 
    SinglePokemon: singlePokemonReducer,
    TwoPokemon: twoPokemonReducer, 
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
