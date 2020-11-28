import React from 'react'
import './App.css'
import HeaderSearchAppBar from './shared/Header'
import SavedMovies from './savedmovies/SavedMovies'

class App extends React.Component {

constructor(props) {
  super(props)
  const movies = JSON.parse(window.localStorage.getItem('saved-movies'))
  if (movies && Array.isArray(movies)) {
    this.state = {
      movies,
    }
  } else {
    this.state = {
      movies: [],
    }
  }
}

  handleAddMovie = (movie) => {
    const movies = this.state.savedMovies
    this.setState({
      savedMovies: [...movies, movie ]
    }, 
    () => {
      window.localStorage.setItem(
        'saved-movies',
        JSON.stringify(this.state.movies),
      )
    },
  )
}

  render() {
    return (
      <div className="App">
        <HeaderSearchAppBar />
        <SavedMovies savedMovies={this.state.savedMovies} />
      </div>
    )
  }
}

export default App
