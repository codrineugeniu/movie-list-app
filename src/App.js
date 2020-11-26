import React from 'react'
import './App.css'

import HeaderSearchAppBar from './shared/Header'
import SearchBox from './search/SearchBox'
import SavedMovies from './savedmovies/SavedMovies'

class App extends React.Component {
  state = {
    savedMovies: []
  }

  handleAddMovie = (movie) => {
    const movies = this.state.savedMovies
    this.setState({
      savedMovies: [...movies, movie ]
    })
  }

  render() {
    return (
      <div className="App">
        <HeaderSearchAppBar />
        <SearchBox onMovieAdd={this.handleAddMovie} />
        <SavedMovies savedMovies={this.state.savedMovies} />
      </div>
    )
  }
}

export default App
