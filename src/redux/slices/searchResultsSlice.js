import { createSlice } from "@reduxjs/toolkit";
//A slice to store and update the search results.
export const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: {
    data: {},
  },
  reducers: {
    update: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { update } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;
