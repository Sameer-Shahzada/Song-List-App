import {configureStore} from '@reduxjs/toolkit'
import songSlice from '../Slices/songSlice'
import songsListSlice from '../Slices/songsListSlice'
// import imageSlice from '../Slices/imageSlice'

// initialize store
const store = configureStore({
    reducer:{
        // imageFile:imageSlice,
        songs:songsListSlice,
        song:songSlice,
    }
})

export default store
