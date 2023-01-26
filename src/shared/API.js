import axios from "axios";

const apiKey = "e0d1cc9fc7f40677211b407b7e6d6cac";

export const searchMovies = (query) => {
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US`;
  return axios.get(URL);
};

// TODO: implement this at some point. Currently not used!
export const searchActors = (query) => {
  const URL = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${query}&language=en-US`;
  return axios.get(URL);
};
