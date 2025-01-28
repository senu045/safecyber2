import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { technology1 } from "../assets";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const LoginPage = () => {
  const [cookies, setCookie] = useCookies(["token"]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/user/login",
        { email, password }
      );
      if (response.status === 200) {
        setCookie("token", response.data.token, {
          expires: new Date(Date.now() + 31 * 24 * 60 * 60 * 1000), // 31 days from now
          domain: "/",
          secure: true,
          sameSite: "Lax",
        });
        // Redirect to home page on successful login
        navigate("/");
        console.log(response.data.token);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="relative bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={technology1} />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="bg-black w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Log in to your account
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-400">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg mt-2 border bg-transparent focus:border-purple-500 focus:outline-none"
                autoFocus
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-400">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                minLength="6"
                className="w-full px-4 py-3 rounded-lg bg-transparent mt-2 border focus:border-purple-500 focus:outline-none"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-gray-600 hover:text-purple-700 focus:text-purple-700"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full block bg-purple-500 hover:bg-purple-300 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              Log In
            </button>
          </form>
          <hr className="my-6 border-gray-300 w-full" />
          <button
            type="button"
            className="w-full block bg-transparent hover:bg-gray-800 text-gray-100 font-semibold rounded-lg px-4 py-3 border border-gray-300"
          >
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="w-6 h-6"
                viewBox="0 0 48 48"
              >
                <defs>
                  <path
                    id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  />
                </defs>
                <clipPath id="b">
                  <use xlinkHref="#a" overflow="visible" />
                </clipPath>
                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <path
                  clipPath="url(#b)"
                  fill="#EA4335"
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#34A853"
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                />
              </svg>
              <span className="ml-4">Log in with Google</span>
            </div>
          </button>
          <p className="mt-8">
            Need an account?{" "}
            <Link
              to="/Signup"
              className="text-purple-500 hover:text-purple-700 font-semibold"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
