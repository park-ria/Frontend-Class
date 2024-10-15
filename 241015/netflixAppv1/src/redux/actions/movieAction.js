import api from "../api";
const API_KEY = import.meta.env.VITE_API_KEY;
const getMovies = () => {
  return async (dispatch) => {
    const popularMovieApi = api.get(
      `movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`
    );
    const topRatedMovieApi = api.get(
      `movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
    );
    const upComingMovieApi = api.get(
      `movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`
    );

    const [popularMovie, topRatedMovie, upComingMovie] = await Promise.all([
      popularMovieApi,
      topRatedMovieApi,
      upComingMovieApi,
    ]);
    dispatch({
      type: "GET_MOVIES_SUCCESS",
      payload: {
        popularMovie: popularMovie.data,
        topRatedMovie: topRatedMovie.data,
        upComingMovie: upComingMovie.data,
      },
    });
  };
};
export const movieAction = { getMovies };
