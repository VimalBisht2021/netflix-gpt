import Moviecard from "./Moviecard";
const Movielist = ({ title, movies }) => {
  if (!movies || !Array.isArray(movies)) return null;
  return (
    <div className="px-6 bg-black">
      <h1 className="text-3xl font-bold py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <Moviecard key={movie.id} posterpath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Movielist;
