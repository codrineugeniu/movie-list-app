import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./shared/Header";
import SearchBox from "./search/SearchBox";
import SavedMovies from "./savedmovies/SavedMovies";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const savedMovies = JSON.parse(window.localStorage.getItem("saved-movies"));
    if (movies && Array.isArray(movies)) {
      setMovies(movies);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("saved-movies", JSON.stringify(movies));
  }, [movies]);

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const handleDeleteMovie = (movieId) => {
    console.log("deleting ", movieId);
    setMovies(movies.filter((item) => item.id !== movieId));
  };

  return (
    <div className="App">
      <Header />
      <SearchBox onMovieAdd={handleAddMovie} />
      <SavedMovies savedMovies={movies} onMovieDelete={handleDeleteMovie} />
    </div>
  );
};

export default App;
