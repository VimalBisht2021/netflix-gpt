import GPTMoviesuggestion from "./GPTMoviesuggestion";
import GPTSearchbar from "./GPTSearchbar";
import { Backgroundimg } from "../utils/const";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10">
        <img
          src={Backgroundimg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <GPTSearchbar />
      <GPTMoviesuggestion />
    </div>
  );
};
export default GPTSearch;
