import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../utils/const";
import { addtrendingmovies } from "../utils/movieslice";
import { useEffect } from "react";

const useTrending = () => {
  const dispatch = useDispatch();
  const trendingmovies= useSelector(store=>store.movies.trendingmovies);
  const gettrendingmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      fetchMovies
    );
    const json = await data.json();
    dispatch(addtrendingmovies(json.results));
  };

  useEffect(() => {
    if(!trendingmovies) gettrendingmovies();
  }, []);
};

export default useTrending;
