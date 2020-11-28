import React, { useState } from 'react';
import { searchMovies } from '../shared/API';

import { Button, Paper, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { useStyles } from './HeaderCss';
import styles from './SearchBox.module.css';

const MovieList = (props) => {
  return (
    <div>
      <ul className={styles.list}>
        {props.movies.map((movie) => (
          <Paper>
            <li className={styles.listItem} key={movie.id}>
              <Grid container>
                <Grid item md={2}>
                  <img
                    src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Grid>
                <Grid md={8}>
                  <b>{movie.title}</b> ({movie.release_date})
                </Grid>
                <Grid md={2}>
                  <Button
                    className={styles.addMovie}
                    color="secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      props.onMovieAdd(movie);
                    }}
                  >
                    <AddIcon /> Add movie
                  </Button>
                </Grid>
              </Grid>
            </li>
          </Paper>
        ))}
      </ul>
    </div>
  );
};

const HeaderSearchAppBar = (props) => {
  const classes = useStyles();
  const [term, setTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const localMovieAdd = (movie) => {
    setMovies([]);
    props.onMovieAdd(movie);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Movie 📽️ List
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={term}
              onChange={(e) => {
                setTerm(e.target.value);
              }}
              onKeyDown={(e) => {
                return e.key === 'Enter'
                  ? searchMovies(term).then((res) =>
                      setMovies(res.data.results)
                    )
                  : null;
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <MovieList movies={movies} onMovieAdd={localMovieAdd} />
    </div>
  );
};
export default HeaderSearchAppBar;
