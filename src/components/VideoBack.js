import { useSelector } from "react-redux";
import useGetTrailer from "../hooks/useGetTrailer";

const VideoBack = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.currentTrailer);
  useGetTrailer(movieId);
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&enablejsapi=1?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBack;
