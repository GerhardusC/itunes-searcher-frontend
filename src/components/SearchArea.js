//Redux useDispatch is used to update the previous search term and to dispatch the api call with the search terms.
//It is also used to set the fetching status based on the api call's async status.
//React useState is used to keep track of user input within the component.
import { useDispatch, useSelector } from "react-redux";
import { update } from "../redux/slices/searchResultsSlice";
import { useState } from "react";
import {
  setFetchingStatus,
  setSearchTerm,
} from "../redux/slices/navigationStateSlice";

//The search area displays the search box for the search term, a selection box for media type and a button to search.
const SearchArea = () => {
  const dispatch = useDispatch();
  const [userSearchType, setUserSearchType] = useState("all");
  const [userSearchValue, setUserSearchValue] = useState("");
  const fetchingStatus = useSelector(
    (state) => state.navigation.fetchingStatus
  );

  //This function fetches results from our express backend with url queries.
  const getResults = async (term, type) => {
    let searchResults = {};
    //If the search term includes & symbol it messes with the api call, so we just disable users from being able to input it.
    if (!term.includes("&")) {
      try {
        dispatch(setFetchingStatus(true));
        let res = await fetch(
          `https://itunes-searcher-backend-production.up.railway.app/api?term=${term}&type=${type}`
        );
        searchResults = await res.json();
      } catch (err) {
        //If there is an error in the fetch we make a result that has a similar object structure to the normal results for convenience.
        searchResults = {
          resultCount: 0,
          results: {
            wrapperType: "error",
            statusText: "Problem fetching results from the server.",
          },
        };
        //If something goes wrong reset the search term.
        dispatch(setSearchTerm(""));
      } finally {
        //Clean up
        dispatch(setFetchingStatus(false));
        dispatch(setSearchTerm(userSearchValue));
        dispatch(update(searchResults));
      }
    }
    //Send an error object if the search term includes the & character.
    if (term.includes("&")) {
      searchResults = {
        resultCount: 0,
        results: {
          wrapperType: "error",
          statusText:
            "Invalid input. Make sure your search term does not include the symbol '&'",
        },
      };
      dispatch(setSearchTerm(""));
      dispatch(update(searchResults));
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        //This prevents the user from fetching again with the form submission before the fetch is completed.
        if (!fetchingStatus) {
          getResults(userSearchValue, userSearchType);
          setUserSearchValue("");
        }
      }}
    >
      <div>Enter search term:</div>
      <input
        placeholder="search"
        required
        onChange={(e) => setUserSearchValue(e.target.value)}
        value={userSearchValue}
      ></input>
      <div>Select category:</div>
      <select
        onChange={(e) => {
          setUserSearchType(e.target.value);
        }}
      >
        <option value="all">all</option>
        <option value="music">music</option>
        <option value="movie">movie</option>
        <option value="podcast">podcast</option>
        <option value="audiobook">audio book</option>
        <option value="software">software</option>
        <option value="ebook">ebook</option>
        <option value="tvShow">tv show</option>
        <option value="shortFilm">short film</option>
        <option value="musicVideo">music video</option>
      </select>
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchArea;
