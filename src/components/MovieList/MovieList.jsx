import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import "./MovieList.css" ;
function MovieList(props) {
    const {moviesList, searchInput, searchRating} = props;
    return (
        <div className= "MovieList">
            { moviesList.map((movie, index) => movie.rate>= searchRating && movie.title.toUpperCase().startsWith(searchInput.toUpperCase())?
             (<MovieCard movie={movie} key={index}/> ):<></>
                
            )}

            
        </div>
    );
}

export default MovieList
