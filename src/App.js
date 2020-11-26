import React from 'react'
import './App.css'

import HeaderSearchAppBar from './shared/Header'
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
        <SavedMovies savedMovies={this.state.savedMovies} />
      </div>
    )
  }
}

export default App
