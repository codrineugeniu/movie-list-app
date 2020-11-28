import React from 'react'
import { Button } from '@material-ui/core'
import TrashIcon from '@material-ui/icons/Delete'
import StarIcon from '@material-ui/icons/StarOutlined'

const MovieItem = (props) => {
  const movie = props.movie
  const imgUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  return (
    <div>
    <li className="movie_item">
      <span className="movie_poster">
        <img src={imgUrl} alt={movie.title} />
      </span>
      <span className="movie_title">{movie.title}</span>
      <span>{movie.release_date}</span>
      <span>{movie.vote_average}</span>
      <span>
        <Button>
          <TrashIcon />
        </Button>
      </span>
      <span>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </span>
    </li>
    </div>
  )
}

const SavedMovies = (props) => {
  return (
    <div>
      {props.savedMovies && props.savedMovies.length > 0 ? (
        <ul >
          {props.savedMovies.map((movie) => (
            <MovieItem movie={movie} />
          ))}
        </ul>
      ) : (
        'No saved movies'
      )}
    </div>
  )
}

export default SavedMovies
