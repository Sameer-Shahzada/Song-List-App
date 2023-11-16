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
                
                // ...state, 
                // name: action.payload.name,
                // link: action.payload.link,
                // source: action.payload.source,
                // image: action.payload.image, // Store reference or identifier
                // image_name:action.payload.image_name

    
            }
        },

        deleteSong: (state) => {
                return {
                    ...state,
                    name: '',
                    link: '',
                    source: '',
                    image: null,
                    image_name:''
                }
        }
    }
})

export const {addSong , deleteSong} = songSlice.actions
export default songSlice.reducer