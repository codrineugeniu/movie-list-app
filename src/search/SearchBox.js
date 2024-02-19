import React, { useState } from "react";

import {
  Button,
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Center,
  Input,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { searchMovies } from "../shared/API";

import styles from "./SearchBox.module.css";

const MovieList = (props) => {
  return (
    <ul className={styles.list}>
      {props.movies.map((movie) => (
        <li className={styles.listItem} key={movie.id}>
          <Container maxW="container.md" minW="container.md">
            <Card>
              <CardBody>
                <Flex>
                  <Center>
                    <Image
                      boxSize="150px"
                      objectFit="contain"
                      src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </Center>
                  <Box minW="md" alignItems="center" display="flex">
                    <b>{movie.title}</b> ({movie.release_date})
                  </Box>
                  <Spacer />
                  <Center w={300}>
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
                  </Center>
                </Flex>
              </CardBody>
            </Card>
          </Container>
        </li>
      ))}
    </ul>
  );
};

const SearchBox = (props) => {
  const [term, setTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchMode, setSearchMode] = useState("movies");

  const localMovieAdd = (movie) => {
    setMovies([]);
    props.onMovieAdd(movie);
  };
  return (
    <Box className={styles.main}>
      <Center
        className={styles.box}
        maxWidth="50%"
        mb="8"
        boxShadow="base"
        p="12"
        rounded="md"
        background="white"
      >
        <Input
          placeholder="Search for a movie"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <Button
          paddingLeft={8}
          onClick={() =>
            // Won't implement this for now
            // searchMode === 'movies'
            //   ? searchMovies(term).then((res) => setMovies(res.data.results))
            //   : searchActors(term).then((res) => setMovies(res.data.results))
            searchMovies(term).then((res) => setMovies(res.data.results))
          }
        >
          Search
        </Button>

        <RadioGroup onChange={setSearchMode} value={searchMode}>
          <Stack direction="row" spacing={8} paddingLeft={8}>
            <Radio value="movies">
              <Text>Search movies</Text>
            </Radio>
            <Radio value="actors">
              <Text>Search actors</Text>
            </Radio>
          </Stack>
        </RadioGroup>
      </Center>

      <MovieList movies={movies} onMovieAdd={localMovieAdd} />
    </Box>
  );
};

export default SearchBox;
