import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import singlePokemonReducer from "../features/SinglePokemon/singlePokemonSlice"

const store = configureStore({
  reducer: { 
    SinglePokemon: singlePokemonReducer,
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
