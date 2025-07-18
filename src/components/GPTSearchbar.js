import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import lang from "../utils/languageconst";
import openai from "../utils/openai";
import { fetchMovies } from "../utils/const";
import { addgptmovieresult } from "../utils/GPTslice";

const GPTSearchbar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchtext = useRef(null);
  const dispatch = useDispatch();
  const searchmovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      fetchMovies
    );
    const json = await data.json();
    return json.results;
  };
  const handlegptclick = async () => {
    const gptquery =
      "Act as a Movie recommendation system and suggest some movies for the query" +
      searchtext.current.value +
      ". only give names of 5 movies.give result like this Gadar,Sholay,Don,Dil,Badshah";
    const gptresults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptquery }],
    });

    const gptmovies = gptresults.choices[0]?.message?.content.split(",");
    const promiseArray = gptmovies.map((movie) => searchmovieTMDB(movie));
    const tmdbresult = await Promise.all(promiseArray);
    dispatch(
      addgptmovieresult({ moviename: gptmovies, movieresults: tmdbresult })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2  bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchtext}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langkey].gptsearchplaceholder}
        />
        <button
          onClick={handlegptclick}
          className="py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg"
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};
export default GPTSearchbar;
