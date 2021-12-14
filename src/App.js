import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './sass/app.scss';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=adce37a3`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }

  }

  useEffect((searchValue) => {
    getMovieRequest();
  }, [searchValue]);

  return (

    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row'>
        <MovieList movies={movies} favoriteComponent={AddFavorites} />
      </div>

    </div>
  );
}

export default App;