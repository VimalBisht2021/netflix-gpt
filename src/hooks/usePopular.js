import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../utils/const";
import { addpopularmovies } from "../utils/movieslice";
import { useEffect } from "react";

const usePopular = () => {
  const dispatch = useDispatch();
  const popularmovies=useSelector(store=>store.movies.popularmovies);
  const getpopularmovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?page=1`,
      fetchMovies
    );
    const json = await data.json();
    dispatch(addpopularmovies(json.results));
  };
  useEffect(() => {
    if(!popularmovies) getpopularmovies();
  }, []);
};

export default usePopular;
