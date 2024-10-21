// src/features/search/searchSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchValue: string;
}

const initialState: SearchState = {
  searchValue: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
      console.log("run")
    },
    clearSearchValue: (state) => {
      state.searchValue = '';
    },
  },
});

export const { setSearchValue, clearSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
