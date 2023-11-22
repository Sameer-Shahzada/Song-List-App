// import {createStore} from 'redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {persistReducer, persistStore} from 'redux-persist';
import storage from "redux-persist/lib/storage";

import songSlice from '../Slices/songSlice'
import songsListSlice from '../Slices/songsListSlice'
// import imageSlice from '../Slices/imageSlice'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['songs'], // specify the reducers you want to persist
  };
  
// define rootReducer 
const rootReducer = combineReducers({
    songs: songsListSlice,
    song: songSlice,
    // imageFile:imageSlice,
})

const persistedReducer = persistReducer(persistConfig , rootReducer)
// initialize store
 const store = configureStore({
    reducer: persistedReducer

})
 const persistor =  persistStore(store)
export {store , persistor}