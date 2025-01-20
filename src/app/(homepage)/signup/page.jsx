"use client";
import Link from "next/link";
import Swal from "sweetalert2";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Spinner from "@/components/shared/Spinner/Spinner";
import lsb from "../../../../public/assets/images/footer-icons/design-sans-titre-331705945.jpg";
import Image from "next/image";
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
  // {loading && <Spinner />}
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-bl from-indigo-50 via-cyan-100 to-cyan-500 px-4">
      <div className="relative flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Create an Account
          </h2>
          <p className="text-center text-gray-500 mb-4">
            Sign up to get started
          </p>
          <div className="space-y-3 mb-5">
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
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
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
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
                placeholder="Enter your photo URL"
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
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-center "
              disabled={loading}
            >
              {loading ? <Spinner /> : "Sign Up"}
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?
            <Link href="/login" className="text-indigo-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>
        <div className="hidden md:flex w-1/2 relative">
          <Image
            src={lsb}
            alt="Signup Illustration"
            layout="fill"
            objectFit="cover"
            className="rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
