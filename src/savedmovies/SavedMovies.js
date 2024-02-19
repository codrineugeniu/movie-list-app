import React, { useState } from "react";
import {
  Alert,
  Box,
  Card,
  CardBody,
  Flex,
  Text,
  Center,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon, StarIcon, InfoOutlineIcon } from "@chakra-ui/icons";

import styles from "./SavedMovies.module.css";

const MovieItem = (props) => {
  const movie = props.movie;
  const imgUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
  const [ratings, setRatings] = useState([
    { id: 0, active: false },
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
  ]);

  const handleMouseOver = (item) => {
    // console.log(item)
    // const index = ratings.findIndex((el) => el.id === item.id)
    // const items = [...ratings]
    // items[index].active = true
    // setRatings(items)
    const items = ratings.map((el, index) => {
      console.log(index, item.id);
      if (index <= item.id) {
        return Object.assign({}, { ...el }, { active: true });
      }
      return Object.assign({}, { ...el }, { active: false });
    });
    setRatings(items);
    console.log("items: ", items);
  };

  return (
    <li className="movie_item" key={movie.id}>
      <Box>
        <Card>
          <CardBody>
            <Flex>
              <Center className="movie_poster">
                <Image
                  boxSize="200px"
                  objectFit="contain"
                  src={imgUrl}
                  alt={movie.title}
                />
              </Center>
              <Center pl="2" className="movie_title">
                {movie.title}
              </Center>
              <Center pl="4">{movie.release_date}</Center>
              <Center pl="4" mr="8">
                {movie.vote_average}
              </Center>
              <Center mr="8">
                <IconButton
                  aria-label="menu"
                  icon={<DeleteIcon />}
                  onClick={() => props.onMovieDelete(movie.id)}
                />
              </Center>
              <Center>
                {ratings.map((item, index) => {
                  return (
                    <StarIcon
                      key={index}
                      className={[
                        styles.star,
                        item.active && styles.active,
                      ].join(" ")}
                      onMouseOver={() => handleMouseOver(item)}
                    />
                  );
                })}
              </Center>
            </Flex>
          </CardBody>
        </Card>
      </Box>
    </li>
  );
};

const SavedMovies = (props) => {
  return (
    <Box>
      <Center>
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
          <Alert status="info" boxShadow="base" p="8" rounded="md" width="30%">
            <InfoOutlineIcon />
            <Text ml="4">No saved movies</Text>
          </Alert>
        )}
      </Center>
    </Box>
  );
};

export default SavedMovies;
