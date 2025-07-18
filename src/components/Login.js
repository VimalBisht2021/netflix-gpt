import { useState, useRef } from "react";
import Header from "./Header.js";
import { Checkvaliddata } from "../utils/Validate.js";

const Login = () => {
    const [issigninform, setsigninform] = useState(true);
    const [errormessage, seterror] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const handlebuttonclick = () => {
        const message = Checkvaliddata(email.current.value, password.current.value);
        seterror(message);
    }
    const togglesignform = () => setsigninform(!issigninform);

    return (
        <div className="relative min-h-screen w-full text-white">
            {/* Background Image and Dark Overlay */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>

            {/* Header */}
            <Header />

            {/* Form with vertical padding (no scrollbar, no centering issues) */}
            <div className="flex justify-center pt-24 pb-16 px-4">
                <form onSubmit={(e) => e.preventDefault()} className="w-full sm:w-3/12 p-10 bg-black bg-opacity-80 rounded-md shadow-md">
                    <h1 className="font-bold text-3xl py-4">
                        {issigninform ? "Sign In" : "Sign Up"}
                    </h1>

                    {!issigninform && (
                        <input
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
                    <button onClick={handlebuttonclick} className="p-4 my-6 w-full font-bold bg-red-700 hover:bg-red-800 transition">
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
    );
};

export default Login;
