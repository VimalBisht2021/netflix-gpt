import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const GPTMoviesuggestion = () => {
  const gpt = useSelector((store) => store.GPT);
  const { movieresults, moviename } = gpt;

  // Show a message if no movie suggestions are available
  if (!moviename || moviename.length === 0) {
    return (
      <div className="p-4 m-4 bg-black text-white text-center text-lg text-gray-400 bg-opacity-80">
        No movie suggestions yet. Try searching something!
      </div>
    );
  }

  return (
    <div className="p-4 m-4 bg-black text-white">
      <div>
        {moviename.map((movienam, index) => {
          const movies = movieresults?.[index];

          if (!movies || !Array.isArray(movies)) return null;

          return (
            <Movielist
              title={movienam}
              movies={movies}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GPTMoviesuggestion;
