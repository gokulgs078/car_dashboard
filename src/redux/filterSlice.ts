import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  selectedColor: string | null;
}

const initialState: FilterState = {
  selectedColor: null,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setColorFilter: (state, action: PayloadAction<string | null>) => {
      state.selectedColor = action.payload;
    },
  },
});

export const { setColorFilter } = filterSlice.actions;

export default filterSlice.reducer;
