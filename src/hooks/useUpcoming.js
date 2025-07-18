import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../utils/const";
import { addupcomingmovies } from "../utils/movieslice";
import { useEffect } from "react";

const useUpcoming = () => {
  const dispatch = useDispatch();
  const upcomingmovies=useSelector(store=>store.movies.upcomingmovies);
  const getupcomingmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      fetchMovies
    );
    const json = await data.json();
    dispatch(addupcomingmovies(json.results));
  };
  useEffect(() => {
    if(!upcomingmovies) getupcomingmovies();
  }, []);
};
export default useUpcoming;
