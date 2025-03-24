import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div className="movie-list">
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onMovieClick={onMovieClick} />
        ))
      ) : (
        <p>No movies found. Try searching for another title!</p>
      )}
    </div>
  );
};

export default MovieList;


