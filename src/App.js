import React from 'react'
import './App.css'

import Header from './shared/Header'
import SearchBox from './search/SearchBox'
import SavedMovies from './savedmovies/SavedMovies'

class App extends React.Component {
  state = {
    savedMovies: []
  }

  handleAddMovie = (movie) => {
    const movies = this.state.savedMovies.push(movie)
    this.setState({
      savedMovies: movies
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox onMovieAdd={this.handleAddMovie} />
        <SavedMovies savedMovies={this.state.savedMovies} />
      </div>
    )
  }
}

export default App
