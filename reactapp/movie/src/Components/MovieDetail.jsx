import React from 'react';

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail">
      <h2>{movie.Title} ({movie.Year})</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
      <p><strong>Runtime:</strong> {movie.Runtime}</p>
    </div>
  );
};

export default MovieDetail;
