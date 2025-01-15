import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CarState {
  selectedCar: any | null; // Holds the selected car's data
}

const initialState: CarState = {
  selectedCar: null, // Null means no car is selected, i.e., show Navigation.
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setSelectedCar: (state, action: PayloadAction<any>) => {
      state.selectedCar = action.payload; // Set the selected car.
    },
    clearSelectedCar: (state) => {
      state.selectedCar = null; // Clear the selected car to show the car list.
    },
  },
});

export const { setSelectedCar, clearSelectedCar } = carSlice.actions;
export default carSlice.reducer;
