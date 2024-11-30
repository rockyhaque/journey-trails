"use client";
import Link from "next/link";
import Swal from "sweetalert2";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Spinner from "@/components/shared/Spinner/Spinner";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  if (session) {
    router.push("/");
  }
  const handleSignUp = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      image: e.target.photo.value,
      role: "tourist",
    };
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.status === 200) {
        e.target.reset();
        const signInRes = await signIn("credentials", {
          redirect: false,
          email: newUser.email,
          password: newUser.password,
        });
        if (signInRes?.error) {
          Swal.fire({
            icon: "error",
            title: "Sign In Failed",
            text: "There was an error logging you in. Please try again.",
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Account Created and Logged In Successfully!",
            text: "You are now logged in.",
            timer: 2000,
            willClose: () => {
              router.push("/");
            },
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Sign Up Failed!",
          text: "Please try again later.",
          timer: 3000,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something Went Wrong!",
        text: "Please try again later.",
        timer: 3000,
      });
    } finally {
      setLoading(false);
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
      {loading && <Spinner />}
      <div className="h-full p-4 rounded-md shadow sm:p-8 bg-slate-300">
        <p className="text-sm text-center dark:text-gray-600 mb-10">
          Already have account?
          <Link
            href={"login"}
            className="hover:underline text-linL dark:text-linD"
          >
            Sign in
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button
            aria-label="Login with Facebook"
            onClick={() => signIn("facebook")}
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 "
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

        <form onSubmit={handleSignUp} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm text-headL dark:text-headD"
              >
                Your Name
              </label>
              <input
                required
                type="name"
                name="name"
                id="name"
                placeholder="Name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm text-headL dark:text-headD"
              >
                Email address
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="*******@email.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="photo"
                className="block text-sm text-headL dark:text-headD"
              >
                Photo Url
              </label>
              <input
                type="photo"
                name="photo"
                id="photo"
                placeholder="URL"
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
                required
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
          <button className="btn w-full px-8 py-3 font-semibold rounded-md ">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
