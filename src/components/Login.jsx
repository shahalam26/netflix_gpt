import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false); // track if signup form is visible

  return (
    <div className="relative h-screen w-full">
      {/* Background image */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7c9e63f7-5b5d-43a4-a3fb-41917ac25301/web/IN-en-20251013-TRIFECTA-perspective_7bc35267-b383-4fb3-b173-eae32292d42e_small.jpg"
        alt="Netflix background"
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 -z-10"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 -z-10"></div>

      {/* Header */}
      <Header />

      {/* Centered Form Box */}
      <div className="flex justify-center items-center h-full relative z-10">
        <div className="bg-black/75 text-white p-8 rounded-md w-[350px]">
          <h1 className="text-3xl font-bold mb-6">
            {isSignup ? "Sign Up" : "Sign In"}
          </h1>

          {/* Form Fields */}
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none"
            />
          )}

          <input
            type="email"
            placeholder="Email or phone number"
            className="w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 bg-gray-800 rounded focus:outline-none"
          />

          <button className="w-full bg-red-600 hover:bg-red-700 p-3 rounded font-semibold">
            {isSignup ? "Sign Up" : "Sign In"}
          </button>

          <p className="text-gray-400 text-sm mt-4">
            {isSignup ? "Already have an account?" : "New to Netflix?"}{" "}
            <span
              className="text-white hover:underline cursor-pointer"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "Sign in now" : "Sign up now"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
