import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

export const fetchTwoPokemon = createAsyncThunk("TwoPokemon", async(input) => {
    try {
        const pokemon = await P.getPokemonByName(input);
        return pokemon;
    } catch (error) {
        throw error;
    }
});

export const twoPokemonSlice = createSlice({
    name: "TwoPokemon",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTwoPokemon.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(fetchTwoPokemon.pending, (state, action) => {
            return "pending";
        });
        builder.addCase(fetchTwoPokemon.rejected, (state, action) => {
            return "rejected";
        });
    }
});

export const selectTwoPokemon = (state) => {
    return state.TwoPokemon;
}

export default twoPokemonSlice.reducer;



