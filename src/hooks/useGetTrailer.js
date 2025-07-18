import { useDispatch, useSelector} from "react-redux";
import { addTrailer } from "../utils/movieslice";
import { useEffect } from "react";
import { fetchMovies } from "../utils/const";

const useGetTrailer = (movieId) => {
  const dispatch = useDispatch();
  const currentTrailer=useSelector(store=>store.movies.currentTrailer);
  const getMovieId = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      fetchMovies
    );
    const json = await data.json();

    const filtereddata = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filtereddata.length ? filtereddata[0] : json.results[0];
    dispatch(addTrailer(trailer));
  };
  useEffect(() => {
    if(!currentTrailer) getMovieId();
  }, []);
};
export default useGetTrailer;
