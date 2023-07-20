import { createSlice } from "@reduxjs/toolkit";
import { isEqual } from "underscore";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    data: [],
  },
  reducers: {
    //A function to add a favourite.
    addFavourite: (state, action) => {
      let alreadyInFavourites = false;
      for (let i = 0; i < state.data.length; i++) {
        if (isEqual(state.data[i], action.payload)) {
          alreadyInFavourites = true;
        }
      }
      if (!alreadyInFavourites) {
        state.data.push(action.payload);
      }
    },
    //Same logic when removing a favourite, if it is a track we use the trackUrl as the ID and if it is an audiobook we use the collectionUrl.
    removeFavourite: (state, action) => {
      for (let i = 0; i < state.data.length; i++) {
        if (isEqual(state.data[i], action.payload)) {
          state.data.splice(i, 1);
          return;
        }
      }
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;
