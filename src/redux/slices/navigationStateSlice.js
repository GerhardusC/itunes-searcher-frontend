import { createSlice } from "@reduxjs/toolkit";
//This slice is responsible for navigation, keeping track of the users's previous search term, and seeing whether the fetch is in progress.
//The value property of the state refers to the current visible page.
//The fetchingStatus property refers to the state of the API call.
//The searchTerm refers to the input that the user submitted to the searchbar.
const navigationStateSlice = createSlice({
  name: "navigationState",
  initialState: { value: "search", fetchingStatus: false, searchTerm: "" },
  reducers: {
    setViewFavourites: (state) => {
      state.value = "favourites";
    },
    setViewSearch: (state) => {
      state.value = "search";
    },
    setFetchingStatus: (state, action) => {
      state.fetchingStatus = Boolean(action.payload);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  setViewFavourites,
  setViewSearch,
  setFetchingStatus,
  setViewError,
  setSearchTerm,
} = navigationStateSlice.actions;

export default navigationStateSlice.reducer;
