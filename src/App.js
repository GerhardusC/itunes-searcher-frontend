import './App.css';
import SearchArea from './components/SearchArea'
import SearchResultsDisplay from './components/SearchResultsDisplay'
import NavigationBar from './components/NavigationBar'
import DisplayFavourites from './components/DisplayFavourites'
import { useSelector } from 'react-redux/es/hooks/useSelector'

function App() {
  const navigationState = useSelector(state => state.navigation.value)
  return (
    <div className='main-container'>
      <NavigationBar />
      {navigationState === "search" ?
        <div>
          <SearchArea />
          <SearchResultsDisplay />
        </div> 
        : navigationState === "favourites" ?
        <div>
          <DisplayFavourites />
        </div> :
        <></>
      }
      <div className='right-bar'>
        
      </div>
    </div>
  );
}

export default App;
