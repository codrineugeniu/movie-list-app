import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { searchMovies } from '../shared/API'

import styles from './SearchBox'

const MovieList = (props) => {
  return (
    <div>
      <ul>
        {props.movies.map((movie) => (
          <li className={styles.listItem} key={movie.id}>
            <b>{movie.title}</b> ({movie.release_date})
            <Button
              className="add_movie"
              color="secondary"
              onClick={(e) => {
                e.preventDefault()
                props.onMovieAdd(movie)
              }}>
              <AddIcon /> Add movie
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const SearchBox = (props) => {
  const [term, setTerm] = useState('')
  const [movies, setMovies] = useState([])

  const localMovieAdd = (movie) => {
    setMovies([])
    props.onMovieAdd(movie)
  }
  return (
    <div className={styles.main}>
      <TextField
        label="Search for a movie"
        variant="outlined"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value)
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          searchMovies(term).then((res) => setMovies(res.data.results))
        }>
        Search
      </Button>
      <MovieList movies={movies} onMovieAdd={localMovieAdd} />
    </div>
  )
}

export default SearchBox
