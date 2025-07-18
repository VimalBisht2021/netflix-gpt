import { useState, useRef } from "react";
import Header from "./Header.js";
import { Checkvaliddata } from "../utils/Validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userslice.js";
import { Backgroundimg, Useravatar } from "../utils/const.js";

const Login = () => {
  const [issigninform, setsigninform] = useState(true);
  const [errormessage, seterror] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handlebuttonclick = () => {
    const message = Checkvaliddata(email.current.value, password.current.value);
    seterror(message);
    if (!message) {
      if (!issigninform) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: { Useravatar },
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                seterror(error.message);
              });
          })
          .catch((error) => {
            const errorcode = error.code;
            const errorm = error.message;
            seterror(errorcode + "-" + errorm);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          })
          .catch((error) => {
            const errorcode = error.code;
            const errorm = error.message;
            seterror(errorcode + "-" + errorm);
          });
      }
    }
  };
  const togglesignform = () => setsigninform(!issigninform);

  return (
    <div>
      <Header />
      <div className="relative min-h-screen w-full text-white">
        <div className="fixed inset-0 -z-10">
          <img
            src={Backgroundimg}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="flex justify-center pt-24 pb-16 px-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full sm:w-3/12 p-10 bg-black bg-opacity-80 rounded-md shadow-md"
          >
            <h1 className="font-bold text-3xl py-4">
              {issigninform ? "Sign In" : "Sign Up"}
            </h1>

            {!issigninform && (
              <input
                ref={name}
                className="p-4 my-4 w-full bg-gray-700"
                type="text"
                placeholder="Full Name"
              />
            )}
            <input
              ref={email}
              className="p-4 my-4 w-full bg-gray-700"
              type="text"
              placeholder="Email Address"
            />
            <input
              ref={password}
              className="p-4 my-4 w-full bg-gray-700"
              type="password"
              placeholder="Password"
            />
            <p className="font-bold text-red-600">{errormessage}</p>
            <button
              onClick={handlebuttonclick}
              className="p-4 my-6 w-full font-bold bg-red-700 hover:bg-red-800 transition"
            >
              {issigninform ? "Sign In" : "Sign Up"}
            </button>

            <p
              className="py-4 cursor-pointer hover:underline"
              onClick={togglesignform}
            >
              {issigninform
                ? "New to Netflix? Then Sign Up NOW!!!"
                : "Already have an account? Click here to sign in"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
