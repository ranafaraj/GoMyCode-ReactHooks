
import './App.css';
import moviesData from './components/moviesData';
import Navbar from './components/Navbar/Navbar';
import {useState, useEffect, Fragment} from "react";
import MovieList from './components/MovieList/MovieList';
import Descriptions from './components/Description/Descriptions';
import { Route, Switch } from 'react-router-dom';




function App()
 {
  const[moviesList, setMoviesList] = useState(moviesData);
  const [searchInput,setSearchInput] = useState ("");
  const [searchRating, setSsearchRating] = useState(0);
  const [newMovie, setNewMovie] = useState({});
  const [firstRender, setfirstRender] = useState(true);
  useEffect(() => {
      !firstRender?
      setMoviesList([...moviesList, newMovie])
     : console.log("")
      }, [firstRender, moviesList, newMovie]); 
 

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render = {()=> (
          <Fragment>
            <Navbar setSearchInput={setSearchInput} 
            setSsearchRating={setSsearchRating} 
            setNewMovie={setNewMovie} 
            setfirstRender={setfirstRender}/>

            <MovieList moviesList={moviesList}
             searchInput={searchInput}
             searchRating={searchRating}
            />
          </Fragment>)}/>
        <Route  exact path="/movies/:id" render ={(match)=> (
          <Descriptions movieData = {moviesList.find(item => item.id === match.params.id)}/>
        )}/>
     
     
     
     </Switch>
    </div>
  );
 }



export default App;
