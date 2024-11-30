"use client";
import Link from "next/link";
import Swal from "sweetalert2";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import Spinner from "@/components/shared/Spinner/Spinner";

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
    <div className="w-[30%] mx-auto my-10">
      <div className="p-4 rounded-md shadow bg-slate-300  h-full">
        <p className="text-sm text-center dark:text-gray-600">
          Dont have account?
          <Link
            href={"signup"}
            className="hover:underline text-linL dark:text-linD"
          >
            Sign up here
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button
            aria-label="Login with Facebook"
            onClick={() => signIn("facebook")}
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1"
          >
            <FaFacebook className="text-2xl text-blue-800" />
            <p>Login with Facebook</p>
          </button>
          <button
            aria-label="Login with Google"
            onClick={() => handleSocialLogin("google")}
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1"
          >
            <FaGoogle className="text-2xl text-[#E34032]" />
            <p>Login with Google</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>
        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm text-headL dark:text-headD"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="*******@email.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm ext-headL dark:text-headD"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline dark:text-gray-600"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <button
            className="btn w-full px-8 py-3 font-semibold rounded-md"
            disabled={loading}
          >
            Sign In
          </button>
        </form>
      </div>
      {loading && <Spinner />}
    </div>
  );
};

export default Page;
