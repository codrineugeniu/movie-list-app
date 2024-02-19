import React, { useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";
import "./App.css";

import Header from "./shared/Header";
import SearchBox from "./search/SearchBox";
import SavedMovies from "./savedmovies/SavedMovies";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const savedMovies = JSON.parse(window.localStorage.getItem("saved-movies"));
    if (savedMovies && Array.isArray(savedMovies)) {
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
    <Box className="App" background="gray.50" h="calc(100vh)">
      <Header />
      <SearchBox onMovieAdd={handleAddMovie} />
      <SavedMovies savedMovies={movies} onMovieDelete={handleDeleteMovie} />
    </Box>
  );
};

export default App;
