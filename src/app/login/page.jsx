"use client";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const session = useSession();
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res.status === 200) {
      router.push("/");
    }
  };

  const handleSocialLogin = async (provider) => {
    const res = await signIn(provider, { redirect: false });
  };
  if (session.status === "authenticated") {
    router.push("/");
  }

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
            aria-label="Login with Google"
            onClick={() => handleSocialLogin("google")}
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600  bg-butL dark:bg-butD hover:bg-butD hover:dark:bg-butL text-paraD dark:text-headL hover:dark:text-paraD hover:text-headL  "
          >
            <FaGoogle className="text-2xl text-[#E34032]" />
            <p>Login with Google</p>
          </button>
          <button
            onClick={() => handleSocialLogin("github")}
            aria-label="Login with GitHub"
            role="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600  bg-butL dark:bg-butD hover:bg-butD hover:dark:bg-butL text-paraD dark:text-headL hover:dark:text-paraD hover:text-headL"
          >
            <FaGithub className="text-2xl text-secondary" />
            <p>Login with GitHub</p>
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
          <button className="btn  w-full px-8 py-3 font-semibold rounded-md">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
