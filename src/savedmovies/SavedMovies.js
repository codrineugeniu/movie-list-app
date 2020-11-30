import React from 'react';
import { Button } from '@material-ui/core';
import TrashIcon from '@material-ui/icons/Delete';
// import StarIcon from '@material-ui/icons/StarOutlined'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,

    margin: 'auto',
  },
  media: {
    height: 50,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  rating: {
    marginTop: 10,
  },
  main: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
}));

const MovieItem = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const movie = props.movie;
  const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const savedmovies = JSON.parse(window.localStorage.getItem('saved-movies'));

  const [movieItem, setMovieItem] = React.useState(savedmovies);

  const deleteItem = (movie) => {
    const newMovieList = movieItem.filter((item) => item.id !== movie.key);
    console.log(newMovieList);
    setMovieItem(newMovieList);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {movie.title[0]}
          </Avatar>
        }
        title={movie.title}
        subheader={movie.release_date}
      />
      <div>
        <CardMedia
          className={classes.media}
          image={imgUrl}
          title={movie.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.overview}
          </Typography>
        </CardContent>
      </div>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <span>
        <Button>
          <TrashIcon key = {movie.id}
          value = {movie}
          onClick = {deleteItem}
          id = {movie.id}/>
        </Button>
      </span>
      <Rating
        className={classes.rating}
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <span>Rating: {movie.vote_average}</span>
    </Card>
  );
};

const SavedMovies = (props) => {
  const classes = useStyles();

  return (
    <div>
      {props.savedMovies && props.savedMovies.length > 0 ? (
        <ul className={classes.main}>
          {props.savedMovies.map((movie) => (
            <MovieItem movie={movie} />
          ))}
        </ul>
      ) : (
        'No saved movies'
      )}
    </div>
  );
};

export default SavedMovies;
