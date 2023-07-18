//Redux imports
import { useSelector, useDispatch } from "react-redux"
import { removeFavourite } from "../redux/slices/favouritesSlice"

//This component displays a list of the user's favourites stored by Redux in state.
const DisplayFavourites = () => {
    //Get current favourites and define dispatch to remove a favourite.
    const currentFavourites = useSelector(state => state.favourites.data)
    const dispatch = useDispatch()
    //If favourites exist, return a list of the favourites in a table, otherwise return the text "No favourites to display."
    if(currentFavourites.length > 0){
        return (
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
                        {
                            currentFavourites.map((favourite) => {
                                return (
                                    <tr key={favourite.trackViewUrl}>
                                        <td><img src={favourite.artworkUrl30 || favourite.artworkUrl60 || favourite.artworkUrl100} alt="Album art." /></td>
                                        <td>{favourite?.trackName || favourite.collectionName}</td>
                                        <td>{favourite.artistName}</td>
                                        <td>{favourite.collectionName}</td>
                                        <td>
                                            <button className="remove-button" onClick={() => dispatch(removeFavourite(favourite))}>❌</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>)
    } else {
        return (
            <div>No favourites to display</div>
        )
    }
}

export default DisplayFavourites;