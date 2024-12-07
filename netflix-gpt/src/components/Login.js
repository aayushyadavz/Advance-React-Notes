import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative min-h-screen font-parkinsans">
      <Header />
      <div className="relative">
        <img
          src="https://www.plex.tv/wp-content/uploads/2024/01/Watch-Free-Hero-2048x1152-3.png"
          alt="Home page background images"
          className="w-full h-full object-cover"
        />
      </div>
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 bg-black bg-opacity-70 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-extrabold mb-4 text-white">
          {!isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="block w-full mb-4 p-2 text-yellow-300 font-semibold border-gray-300 rounded bg-gray-600 outline-none"
          />
        )}
        <input
          type="email"
          placeholder="Email address"
          className="block w-full mb-4 p-2 text-yellow-300 font-semibold border-gray-300 rounded bg-gray-600 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full mb-4 p-2 text-yellow-300 font-semibold border-gray-300 rounded bg-gray-600 outline-none"
        />
        <button className="block w-full bg-yellow-300 text-black p-2 mb-4 rounded font-bold">
          {isSignInForm ? "Sign Up" : "Sign In"}
        </button>
        <p className="text-xs text-white">
          {isSignInForm ? "Already a user!" : "New to movibee?"}
          <span
            className="underline font-semibold text-yellow-300 cursor-pointer ml-1"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
