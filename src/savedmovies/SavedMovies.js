import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import TrashIcon from '@material-ui/icons/Delete'
import StarIcon from '@material-ui/icons/StarOutlined'

import styles from './SavedMovies.module.css'

const MovieItem = (props) => {
  const handleMouseOver = (item) => {
    // console.log(item)
    // const index = ratings.findIndex((el) => el.id === item.id)
    // const items = [...ratings]
    // items[index].active = true
    // setRatings(items)
    const items = ratings.map((el, index) => {
      console.log(index, item.id)
      if (index <= item.id) {
        return Object.assign({}, { ...el }, { active: true })
      }
      return Object.assign({}, { ...el }, { active: false })
    })
    setRatings(items)
    console.log('items: ', items)
  }
  const movie = props.movie
  const imgUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  const [ratings, setRatings] = useState([
    { id: 0, active: false },
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
  ])
  return (
    <li className="movie_item">
      <span className="movie_poster">
        <img src={imgUrl} alt={movie.title} />
      </span>
      <span className="movie_title">{movie.title}</span>
      <span>{movie.release_date}</span>
      <span>{movie.vote_average}</span>
      <span>
        <Button onClick={() => props.onMovieDelete(movie.id)}>
          <TrashIcon />
        </Button>
      </span>
      <span>
        {ratings.map((item, index) => {
          return (
            <StarIcon
              className={[styles.star, item.active && styles.active].join(' ')}
              onMouseOver={() => handleMouseOver(item)}
            />
          )
        })}
      </span>
    </li>
  )
}

const SavedMovies = (props) => {
  return (
    <div>
      {props.savedMovies && props.savedMovies.length > 0 ? (
        <ul>
          {props.savedMovies.map((movie) => (
            <MovieItem
              movie={movie}
              onMovieDelete={props.onMovieDelete}
              key={movie.id}
            />
          ))}
        </ul>
      ) : (
        'No saved movies'
      )}
    </div>
  )
}

export default SavedMovies
