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
        
    }
})

export const {addSong} = songSlice.actions
export default songSlice.reducer