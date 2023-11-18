import { createSlice } from "@reduxjs/toolkit";

// initialize songSlice
const songSlice = createSlice({
    name: 'song',
    initialState: {
        name: '',
        link: '',
        source: '',
        image: null,
        image_name:''
    },

    reducers: {       
        addSong: (state, action) => {
            return {
                ...state, ...action.payload
            }
        },
        
        // deleteSong: (state) => {
        //         return {
        //             ...state,
        //             name: '',
        //             link: '',
        //             source: '',
        //             image: null,
        //             image_name:''
        //         }
        // }
        // Note -> This reducer action doesn't work properly
    }
})

export const {addSong , deleteSong } = songSlice.actions
export default songSlice.reducer