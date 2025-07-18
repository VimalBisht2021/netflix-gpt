import { useSelector } from "react-redux";
import Videotitle from "./Videotitle";
import VideoBack from "./VideoBack";
const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowplayingmovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <Videotitle title={original_title} overview={overview} />
      <VideoBack movieId={id} />
    </div>
  );
};
export default Maincontainer;
