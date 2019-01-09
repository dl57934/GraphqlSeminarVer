import Axios from "axios";

const movieApi = async () => {
  const {
    data: {
      data: { movies }
    }
  } = await Axios("https://yts.am/api/v2/list_movies.json");

  return movies;
};

export default movieApi;
