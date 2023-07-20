//Using Redux and storing the search results in global state so we can add some of them to favourites.
import { useSelector, useDispatch } from "react-redux";
import { addFavourite } from "../redux/slices/favouritesSlice";

//This component displays the search results in a table based on the user search input submitted from the search area component.
const SearchResultsDisplay = () => {
  const searchResults = useSelector((state) => state.search.data);
  const fetchingStatus = useSelector(
    (state) => state.navigation.fetchingStatus
  );
  const searchTerm = useSelector((state) => state.navigation.searchTerm);
  const dispatch = useDispatch();
  //If data is being fetched return fetching data.
  if (fetchingStatus) {
    return <div>Fetching data...</div>;
  }
  //If search results are returned and the resultCount property says that there are results related to the search term,
  //then return a table displaying the results.

  if (searchResults && searchResults.resultCount > 0) {
    const searchIds = Object.keys(searchResults.results);

    return (
      <div>
        <p>
          Displaying {searchResults.resultCount} results for <b>{searchTerm}</b>
          .
        </p>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Art</th>
                <th>Name</th>
                <th>Artist</th>
                <th>Collection</th>
              </tr>
            </thead>
            <tbody>
              {searchIds.map((key) => {
                return (
                  <tr key={key}>
                    {/* 
                                                Depending on which artwork exists, we display it in the table, some results only have 30px and some have only 60 px etc.
                                            */}
                    <td>
                      <img
                        src={
                          searchResults.results[key].artworkUrl30 ||
                          searchResults.results[key].artworkUrl60 ||
                          searchResults.results[key].artworkUrl100
                        }
                        alt="art"
                      />
                    </td>
                    {/* 
                                                If the result is an audiobook, it has no trackname, so we use the collectionName instead of the track name, because an audio book is classified
                                                as a collection according to the search api. 
                                            */}
                    <td>
                      {searchResults.results[key]?.trackName ||
                        searchResults.results[key].collectionName}
                    </td>
                    <td>{searchResults.results[key].artistName}</td>
                    <td>{searchResults.results[key].collectionName}</td>
                    <td>
                      {/* 
                                                    If the item is not currently favourited we give a favourite button, otherwise we return an empty.
                                                    All collectionIds in the currentIds array belong to audio books, and all the trackIds belong to everything else.
                                                */}
                      <button
                        className="favourite-button"
                        onClick={(e) => {
                          dispatch(addFavourite(searchResults.results[key]));
                          e.target.style.display = "none";
                        }}
                      >
                        ⭐
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  //There are two types of error objects that can be returned from the front end ofthe application if either the result contains the & symbol or
  //if the api call was unsuccessful. The statusText returned from this object is then displayed to the user.
  if (
    searchResults.resultCount === 0 &&
    searchResults.results.wrapperType === "error"
  ) {
    return (
      <>
        <div>{searchResults.results.statusText}</div>
      </>
    );
  }
  //If there are no results, but the result returned was not an error, display that no results were found from the store.
  if (searchResults.resultCount === 0) {
    return (
      <div>
        No results found for <b>{searchTerm}</b>.
      </div>
    );
  }
};

export default SearchResultsDisplay;
