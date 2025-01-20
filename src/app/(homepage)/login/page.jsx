"use client";
import Link from "next/link";
import Swal from "sweetalert2";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import Spinner from "@/components/shared/Spinner/Spinner";
import loginsign from "../../../../public/assets/images/footer-icons/loginsign.jpg";
import Image from "next/image";
const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    router.push("/");
    return null;
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);

    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "Welcome back!",
        timer: 2000,
      });
      router.push("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed!",
        text: "Invalid email or password.",
        timer: 2000,
      });
    }
  };
  const handleSocialLogin = async (provider) => {
    setLoading(true);
    const res = await signIn(provider, { redirect: false });
    setLoading(false);
    if (session.status === "authenticated") {
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: `You have logged in successfully with ${provider}.`,
        timer: 2000,
      }).then(() => {
        window.location.href = "/";
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed!",
        text: `Unable to log in with ${provider}. Please try again.`,
        timer: 2000,
      });
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-cyan-100 to-cyan-500 px-4">
      <div className="relative flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="hidden md:flex w-1/2 relative">
          <Image
            src={loginsign}
            alt="Login Illustration"
            layout="fill"
            objectFit="cover"
            className="rounded-l-lg"
          />
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 mb-4">Login to continue</p>
          <div className="space-y-3">
            <button
              onClick={() => handleSocialLogin("google")}
              className="flex items-center justify-center w-full px-4 py-3 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 transition"
            >
              <FaGoogle className="text-xl text-red-500 mr-2" /> Login with
              Google
            </button>
            <button
              onClick={() => handleSocialLogin("facebook")}
              className="flex items-center justify-center w-full px-4 py-3 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  transition"
            >
              <FaFacebook className="text-xl mr-2" /> Login with Facebook
            </button>
          </div>
          <div className="flex items-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="text-gray-500 px-2">OR</span>
            <hr className="w-full border-gray-300" />
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
                placeholder="Enter your password"
              />
              <Link
                href="#"
                className="text-xs text-indigo-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-center "
              disabled={loading}
            >
              {loading ? <Spinner /> : "Sign In"}
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-sm text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-indigo-600 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
