import { createSlice } from "@reduxjs/toolkit";

const songListSlice = createSlice({
    name: 'songs',
    initialState: [],

    reducers: {
        addNewSong: (state, action) => {
            return [...state, action.payload];
        },

        deleteSongList: (state, action) => {
            return state.filter((song, index) => index !== action.payload);
        }
    }
})

export const { addNewSong, deleteSongList } = songListSlice.actions
export default songListSlice.reducer