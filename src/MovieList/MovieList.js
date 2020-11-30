import React from 'react';

import { Button, Paper, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import styles from './MovieList.module.css';

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

  export default MovieList