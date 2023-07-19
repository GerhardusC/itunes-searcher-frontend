import React from "react";
import NavigationBar from "./components/NavigationBar";
import DisplayFavourites from "./components/DisplayFavourites";
import SearchResultsDisplay from "./components/SearchResultsDisplay";
import SearchArea from "./components/SearchArea";
import renderer from "react-test-renderer";
import { store } from "./redux/store";
import { Provider } from "react-redux";

test("Navigation bar renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <NavigationBar />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Favourites display correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <DisplayFavourites />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Search results display correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <SearchResultsDisplay />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Search area display correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <SearchArea />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
