import {createSlice} from '@reduxjs/toolkit';

const imageSlice = createSlice({
    name:'imageFile',
    initialState:{
        selectedImage:null,
        imageName:''
    },
    reducers:{
      setImage: (state , action) => {
        state.selectedImage = action.payload.selectedImage;
        state.imageName = action.payload.imageName;
      },

      deleteImage: (state) => {
        state.selectedImage = null;
        state.imageName = '';
      },
    },
});
export const {setImage , deleteImage} = imageSlice.actions;
export default imageSlice.reducer;