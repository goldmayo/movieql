import axios from "axios";
// const BASE_URL = "http://yts.mx/api/v2/";
const BASE_URL = "https://yts-proxy.now.sh/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIES_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIES_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Forwarded-Proto": "https",
      Origin: "*",
    },
  });
  return movies;
};

export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios.get(MOVIES_DETAILS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movie;
};

export const getSuggestions = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(MOVIES_SUGGESTIONS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};
