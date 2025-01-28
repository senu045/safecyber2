import { technology1 } from "../assets";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/user/sign-up",
        formData
      );
      console.log("User signed up successfully:", response.data);
    } catch (error) {
      console.error(
        "Failed to sign up user:",
        error.response?.data || error.message
      );
    }
  };
  return (
    <div className="relative min-w-screen min-h-screen bg-purple-900 flex items-center justify-center px-5 py-5 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={technology1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="relative rounded-3xl shadow-xl w-full overflow-hidden"
        style={{ maxWidth: "1000px" }}
      >
        <div className="md:flex w-full flex items-center justify-center">
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10 flex items-center justify-center">
            <div className="w-full bg-transparent border text-gray-500 rounded-3xl p-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-100">REGISTER</h1>
                <p className="text-gray-200">
                  Enter your information to register
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="flex -mx-3">
                    <div className="w-1/2 px-3 mb-5">
                      <label
                        htmlFor="firstName"
                        className="text-xs font-semibold px-1 text-gray-200"
                      >
                        First name
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-300 text-lg"></i>
                        </div>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-purple-200 outline-none focus:border-purple-600"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="w-1/2 px-3 mb-5">
                      <label
                        htmlFor="lastName"
                        className="text-xs font-semibold px-1 text-gray-200"
                      >
                        Last name
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-purple-600"
                          placeholder="Smith"
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold px-1 text-gray-200"
                      >
                        Email
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="email"
                          id="email"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-purple-600"
                          placeholder="johnsmith@example.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-12">
                      <label
                        htmlFor="password"
                        className="text-xs font-semibold px-1 text-gray-200"
                      >
                        Password
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="password"
                          id="password"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-purple-600"
                          placeholder="************"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <button
                        type="submit"
                        className="block w-full max-w-xs mx-auto bg-purple-500 hover:bg-purple-700 focus:bg-purple-700 text-white rounded-lg px-3 py-3 font-semibold"
                      >
                        REGISTER NOW
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link
                      to={"/login"}
                      className="inline-block text-sm text-purple-400 align-baseline hover:text-purple-300"
                      href="#"
                    >
                      Already have an account? Login!
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
