import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../utils/const";
import { addnowplaying } from "../utils/movieslice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowplayingmovies = useSelector(store=>store.movies.nowplayingmovies)
  const getNowMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      fetchMovies
    );
    const json = await data.json();
    dispatch(addnowplaying(json.results));
  };
  useEffect(() => {
    if(!nowplayingmovies) getNowMovies();
  }, []);
};

export default useNowPlayingMovies;
