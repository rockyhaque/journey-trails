"use client";

import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex h-screen my-96">
      {/* Left Background */}
      <div className="absolute left-0 top-0 h-full w-1/2 bg-white -z-10"></div>

      {/* Right Background */}
      <div className="absolute right-0 top-0 h-full w-1/2 md:bg-login-pattern bg-cover bg-center -z-10"></div>

      {/* Main Content */}
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-5">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full sm:w-96 mx-auto px-5 py-10 rounded backdrop-blur-sm shadow md:shadow-none border border-black/15 md:border-none">
            <h4 className="text-gray-700 mb-2">Start your journey</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-16">
              Signin to InsideBox
            </h2>
            <form>
              {/* Email */}
              <div className="relative group">
                <label
                  className="text-xs font-medium text-gray-700 bg-white px-2 absolute left-3 -top-2 transition-all group-focus-within:text-primary"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="block w-full px-4 py-2.5 text-gray-700 border border-gray-700 rounded placeholder:text-xs focus:border-white focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 focus:placeholder:text-transparent"
                  placeholder="Email"
                />
              </div>

              {/* password */}
              <div className="mt-6 relative group">
                <label
                  className="text-xs font-medium text-gray-700 bg-white px-2 absolute left-3 -top-2 transition-all group-focus-within:text-primary"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  class="block w-full px-4 py-2.5 text-gray-700 border border-gray-700 rounded placeholder:text-xs focus:border-white focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 focus:placeholder:text-transparent"
                  placeholder="Password"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 top-1 flex items-center pr-4 cursor-pointer text-black"
                >
                  {showPassword ? (
                    <AiFillEye size={14} />
                  ) : (
                    <AiFillEyeInvisible size={14} />
                  )}
                </span>
              </div>

              <p className="flex justify-end mt-2 mr-4">
                <Link href={"#"} className="text-xs text-black/80">
                  Forget Password
                </Link>
              </p>

              <button className="w-full px-4 py-2.5 bg-black text-white text-sm font-semibold rounded mt-8">
                Login
              </button>
            </form>
            {/* Divider */}
            <div className="flex items-center gap-3 my-5 md:w-full text-sm">
              <span className="bg-gray-700 h-[1px] w-full block"></span>
              <p className="text-gray-700">or</p>
              <span className="bg-gray-700 h-[1px] w-full block"></span>
            </div>

            {/* social Icons */}
            <div className="flex items-center gap-5">
              <button className="border-gray-700 w-full py-2.5 rounded border flex justify-center items-center hover:shadow-xl">
                <FcGoogle className="text-2xl" />
              </button>
              <button className="border-gray-700 w-full py-2.5 rounded border flex justify-center items-center hover:shadow-xl">
                <FaFacebook className="text-2xl text-blue-600" />
              </button>
            </div>

            <p className="mt-6 text-black text-center text-sm">
              Don't have an account?{" "}
              <Link href={"/signup"} className="font-medium underline">
                Register
              </Link>
            </p>
          </div>
        </div>

        {/* Optional Right Content */}
        <div className="md:block md:w-1/2 text-white"></div>
      </div>
    </div>
  );
};

export default Login;
