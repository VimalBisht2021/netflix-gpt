import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userslice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/const";
import { toggleGPTSearchView } from "../utils/GPTslice";
import { changelanguage } from "../utils/configslice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showgptsearch = useSelector((store) => store.GPT.showGPTSearch);
  const location = useLocation(); // to get current path
  const selectedlanguage = useSelector((store) => store.config.lang);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));

        // only navigate if not already on /browse
        if (location.pathname === "/" || location.pathname === "/login") {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());

        // only navigate if not already on login page
        if (location.pathname !== "/") {
          navigate("/");
        }
      }
    });

    return () => unsubscribe();
  }, [dispatch, location, navigate]);

  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        // Firebase automatically logs out and triggers onAuthStateChanged
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
        navigate("/Error");
      });
  };
  const handleGPTSearch = () => {
    dispatch(toggleGPTSearchView());
  };

  const handlelanguagechange = (e) => {
    dispatch(changelanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black/70 to-transparent z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />

      {user && (
        <div className="flex items-center gap-4">
          {showgptsearch && (
            <select
              value={selectedlanguage}
              className=" p-2 m-2 bg-gray-900 text-white"
              onChange={handlelanguagechange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGPTSearch}
            className="py-2 px-4 mx-4 text-white bg-purple-600 rounded-lg"
          >
            {showgptsearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="rounded-lg w-12 h-12"
            src={user.photoURL}
            alt="user icon"
          />
          <button
            onClick={handlesignout}
            className="font-bold rounded-lg p-2 bg-red-700 hover:bg-red-800 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
