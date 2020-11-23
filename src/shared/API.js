import axios from 'axios';

export const searchMovies = (query) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US`
  return axios.get(URL)
}