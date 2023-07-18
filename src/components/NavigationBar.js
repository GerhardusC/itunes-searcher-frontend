//Using global state to manage navigation instead of using Router and Routes.
import { useDispatch, useSelector } from "react-redux"
import { setViewFavourites, setViewSearch } from "../redux/slices/navigationStateSlice"
//The navigation bar component consists of buttons that allow you to change the current active page, which is the value of the navigation state.
const NavigationBar = () => {
    const dispatch = useDispatch()
    const navigationState = useSelector(state => state.navigation.value)
    return (
        <ul className="navigation-bar">
            <li><button onClick={() => dispatch(setViewSearch())} className={navigationState === "search" ? "active-nav-button" : "inactive-nav-button"}>Search</button></li>
            <li><button onClick={() => dispatch(setViewFavourites())} className={navigationState === "favourites" ? "active-nav-button" : "inactive-nav-button"}>Favourites</button></li>
        </ul>
    )
}

export default NavigationBar;