import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './Components/Searchbar';
import MovieList from './Components/MovieList';
import MovieDetail from './Components/MovieDetail';

const API_KEY = 'efeb3796'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async (term) => {
    setSearchTerm(term);
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${term}&apikey=${API_KEY}`);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
  const handleMovieClick = async (id) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
      setSelectedMovie(response.data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Movie Search App</h1>
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      </header>
      {selectedMovie ? (
        <MovieDetail movie={selectedMovie} />
      ) : (
        <MovieList movies={movies} onMovieClick={handleMovieClick} />
      )}
    </div>
  );
};

export default App;
