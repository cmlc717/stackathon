import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

export const fetchSinglePokemon = createAsyncThunk("OnePokemon", async(input) => {
    try {
        const pokemon = await P.getPokemonByName(input);
        return pokemon;
    } catch (error) {
        throw error;
    }
});

export const singlePokemonSlice = createSlice({
    name: "SinglePokemon",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSinglePokemon.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export const selectPokemon = (state) => {
    return state.SinglePokemon;
}

export default singlePokemonSlice.reducer;



