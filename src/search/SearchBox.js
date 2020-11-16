import React, { useState } from 'react'
import { searchMovies } from '../shared/API'

const MovieList = (props) => {
  return (
    <div>
      <ul>
        {props.movies.map((movie) => (
          <li>
            <b>{movie.title}</b> ({movie.release_date})
          </li>
        ))}
      </ul>
    </div>
  )
}

const SearchBox = () => {
  const [term, setTerm] = useState('')
  const [movies, setMovies] = useState([])
  return (
    <div>
      <input
        placeholder="Search for a movie"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value)
        }}
      />
      <button
        onClick={() =>
          searchMovies(term).then((res) => setMovies(res.data.results))
        }>
        Search
      </button>
      <MovieList movies={movies} />
    </div>
  )
}

export default SearchBox
