"use client";
import Link from "next/link";

const page = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      image: e.target.photo.value,
      password: e.target.password.value,
    };
    const res = await fetch(`${process.env.meta.LIVE_URL}/signup/api`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.status === 200) {
      e.target.reset();
    }
  };

  return (
    <div className="w-[30%] mx-auto my-10">
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
          <button className="btn bg-butL dark:bg-butD hover:bg-butD hover:dark:bg-butL text-paraD dark:text-headL hover:dark:text-paraD hover:text-headL w-full px-8 py-3 font-semibold rounded-md  dark:bg-violet-600 dark:text-gray-50  ">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
