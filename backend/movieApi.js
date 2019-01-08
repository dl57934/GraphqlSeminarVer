import axios from "axios";
const API_URL = "https://yts.am/api/v2/list_movies.json";

const getMovieList = async () => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(API_URL);

  return movies;
};

export default getMovieList;
