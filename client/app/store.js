import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import singlePokemonReducer from "../features/SinglePokemon/singlePokemonSlice"
import twoPokemonReducer from '../features/ComparePokemon/compareSlice';
import movesReducer from '../features/SinglePokemon/movesSlice';
import teamReducer from '../features/team/teamSlice';

const store = configureStore({
  reducer: { 
    SinglePokemon: singlePokemonReducer,
    TwoPokemon: twoPokemonReducer, 
    Moves: movesReducer,
    Team: teamReducer
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
