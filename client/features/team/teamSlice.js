import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

export const fetchTeam = createAsyncThunk("Team", async(input) => {
    try {
        const pokemon = await P.getPokemonByName(input);
        return pokemon;
    } catch (error) {
        throw error;
    }
});

export const teamSlice = createSlice({
    name: "Team",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTeam.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(fetchTeam.pending, (state, action) => {
            return "pending";
        });
        builder.addCase(fetchTeam.rejected, (state, action) => {
            return "rejected";
        });
    }
});

export const selectTeam = (state) => {
    return state.Team;
}

export default teamSlice.reducer;



