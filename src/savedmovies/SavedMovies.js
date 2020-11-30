import React from 'react'
import { Button } from '@material-ui/core'
import TrashIcon from '@material-ui/icons/Delete'
import StarIcon from '@material-ui/icons/StarOutlined'
// import HeaderSearchAppBar from '../shared/Header'


const MovieItem = (props) => {
  const movie = props.movie
  const imgUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`

const savedmovies = JSON.parse(window.localStorage.getItem('saved-movies'))
  
const [movieItem, setMovieItem] = React.useState(savedmovies)
  
const deleteItem = (movie) =>{
    
    const newMovieList = movieItem.filter(item => item.id !== movie.key);
    console.log(newMovieList)
    setMovieItem (newMovieList)
  }
  
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
          <TrashIcon key = {movie.id}
          value = {movie}
          onClick = {deleteItem}
          id = {movie.id}/>
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
