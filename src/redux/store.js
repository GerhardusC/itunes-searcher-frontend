import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './slices/searchResultsSlice'
import favouritesSlice from './slices/favouritesSlice'
import navigationStateSlice from './slices/navigationStateSlice'

//Creating Redux store for search results.
export const store = configureStore({
    reducer: {
        search: searchReducer,
        favourites: favouritesSlice,
        navigation: navigationStateSlice
    },
  })