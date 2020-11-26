import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchBox from './shared/Header'


import './SearchBox.css';

const MovieList = (props) => {
  return (
    <div>
      <ul className="main">
        {props.movies.map((movie) => (
          <li className="listItem" key={movie.id}>
            <b>{movie.title}</b> ({movie.release_date})
            <div>
              <img
                src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt="logo"
              />
            </div>
            <Button
              className="addMovie"
              color="secondary"
              onClick={(e) => {
                e.preventDefault();
                props.onMovieAdd(movie);
              }}
            >
              <AddIcon /> Add Movie
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

  const localMovieAdd = (movie) => {
    setMovies([]);
    props.onMovieAdd(movie);
  };
  
const displayMovieList = () => {
  return (
    <div>
      <br></br>
      <MovieList movies={movies} onMovieAdd={localMovieAdd} />
    </div>
  );
};

export default displayMovieList;
