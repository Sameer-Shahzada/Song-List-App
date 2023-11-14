import {configureStore} from '@reduxjs/toolkit'
import imageSlice from '../Slices/imageSlice'
// initialize store

const store = configureStore({
    reducer:{
        imageFile:imageSlice,
    }
})

export default store
