import { createSlice } from "@reduxjs/toolkit";

const songListSlice = createSlice({
    name:'songs',
    initialState:[],

    reducers: {
        addNewSong: (state , action) => {
            return [...state, action.payload];
        },

        deleteSongList: (state, action) => {
            // const songIndex = state.findIndex(song => song.id === action.payload);
            // if (songIndex !== -1) {
            //   state.splice(songIndex, 1);
            // }
            state.splice(action.payload, 1)
        }
    }
})

export const {addNewSong , deleteSongList} = songListSlice.actions
export default songListSlice.reducer