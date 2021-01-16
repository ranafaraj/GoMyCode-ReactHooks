
import './App.css';
import moviesData from './components/moviesData';
import Navbar from './components/Navbar/Navbar';
import {useState, useEffect} from "react";
import MovieList from './components/MovieList/MovieList';


function App() {
  const[moviesList, setMoviesList] = useState(moviesData);
  const [searchInput,setSearchInput] = useState ("");
  const [searchRating, setSsearchRating] = useState(0);
  const [newMovie, setNewMovie] = useState({});
  const [firstRender, setfirstRender] = useState(true);
  useEffect(() => {
      !firstRender?
      setMoviesList([... moviesList, newMovie])
     : console.log("Hello there")
      }, [newMovie]); 
 

  return (
    <div className="App">
     <Navbar setSearchInput={setSearchInput} setSsearchRating={setSsearchRating} setNewMovie={setNewMovie} setfirstRender={setfirstRender}/>
     
     <MovieList moviesList={moviesList}
     searchInput={searchInput}
     searchRating={searchRating}
     
      />
     
    </div>
  );
}

export default App;
