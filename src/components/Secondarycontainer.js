import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const Secondarycontainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowplayingmovies && (
      <div className="bg-black">
        <div className="-mt-32 relative z-20">
          <Movielist title={"Now Playing"} movies={movies.nowplayingmovies} />
          <Movielist title={"Trending"} movies={movies.trendingmovies} />
          <Movielist title={"Popular"} movies={movies.popularmovies} />
          <Movielist title={"Upcoming Movies"} movies={movies.upcomingmovies} />
        </div>
      </div>
    )
  );
};
export default Secondarycontainer;
