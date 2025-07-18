import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopular from "../hooks/usePopular";
import useTrending from "../hooks/useTrending";
import useUpcoming from "../hooks/useUpcoming";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";

const Browse = () => {
  const showgpt = useSelector((store) => store.GPT.showGPTSearch);
  useNowPlayingMovies();
  usePopular();
  useTrending();
  useUpcoming();

  return (
    <div>
      <Header />
      {showgpt ? (
        <GPTSearch />
      ) : (
        <>
          <Maincontainer />
          <Secondarycontainer />
        </>
      )}
    </div>
  );
};

export default Browse;
