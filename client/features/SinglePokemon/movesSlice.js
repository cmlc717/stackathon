import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

export const fetchMoves = createAsyncThunk("Moves", async(input) => {
    try {
        const moves = await P.getMoveByName(input);
        return moves;
    } catch (error) {
        throw error;
    }
});

export const movesSlice = createSlice({
    name: "Moves",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMoves.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(fetchMoves.pending, (state, action) => {
            return "pending";
        });
        builder.addCase(fetchMoves.rejected, (state, action) => {
            return "rejected";
        });
    }
});

export const selectMoves = (state) => {
    return state.Moves;
}

export default movesSlice.reducer;



