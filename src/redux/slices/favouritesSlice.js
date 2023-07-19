import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    data: [],
    currentIds: [],
  },
  reducers: {
    //A function to add a favourite.
    //A "track wrapper" is considered a track while an "audiobook" wrapper specifically is considered a collection. This means there will be no collection
    //that has the same ID as a track we take advantage of this and push this url as the ID for each favourited item.
    //So for audiobooks we use the collectionUrl as the ID and for tracks the trackId and push the IDs to the currentIds array.
    //When the trackViewUrl for tracks and the collectionUrl for audio books are not already included in the currentIds the favourite is added, and the ID to the currentIds array.
    //In case you might be asking why I didn't use the trackId property for tracks, its because I wanted them in the same array, and this looks more cohesive.
    addFavourite: (state, action) => {
      if (
        !state.currentIds.includes(action.payload.trackViewUrl) &&
        !state.currentIds.includes(action.payload.collectionViewUrl)
      ) {
        state.data.push(action.payload);
        if (action.payload.wrapperType === "track") {
          state.currentIds.push(action.payload.trackViewUrl);
        }
        if (action.payload.wrapperType === "audiobook") {
          state.currentIds.push(action.payload.collectionViewUrl);
        }
      } else {
        console.log("Track already in favourites.");
      }
    },
    //Same logic when removing a favourite, if it is a track we use the trackUrl as the ID and if it is an audiobook we use the collectionUrl.
    removeFavourite: (state, action) => {
      for (let i = 0; i < state.data.length; i++) {
        if (
          action.payload.wrapperType === "track" &&
          state.data[i].trackViewUrl === action.payload.trackViewUrl
        ) {
          state.data.splice(i, 1);
          state.currentIds.splice(
            state.currentIds.indexOf(action.payload.trackViewUrl),
            1
          );
          return;
        }
        if (
          action.payload.wrapperType === "audiobook" &&
          state.data[i].collectionViewUrl === action.payload.collectionViewUrl
        ) {
          state.data.splice(i, 1);
          state.currentIds.splice(
            state.currentIds.indexOf(action.payload.collectionViewUrl),
            1
          );
          return;
        }
      }
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;
