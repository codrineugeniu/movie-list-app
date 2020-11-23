import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

export const searchMovies = (query) => {
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US`
  return axios.get(URL)
}

export const searchActors = (query) => {
  const URL = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${query}&language=en-US`
  return axios.get(URL)
}
