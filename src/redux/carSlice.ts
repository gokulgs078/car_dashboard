import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CarState {
  selectedCar: any | null; 
}

const initialState: CarState = {
  selectedCar: null, 
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setSelectedCar: (state, action: PayloadAction<any>) => {
      state.selectedCar = action.payload; 
    },
    clearSelectedCar: (state) => {
      state.selectedCar = null; 
    },
  },
});

export const { setSelectedCar, clearSelectedCar } = carSlice.actions;
export default carSlice.reducer;
