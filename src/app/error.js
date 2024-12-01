"use client"; // Error boundaries must be Client Components

import Link from "next/link";
import { useEffect } from "react";
import { AiOutlineWarning } from "react-icons/ai";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-cyan-100 to-cyan-600 text-gray-100">
      <section className="flex flex-col items-center text-center p-8 bg-white/80 backdrop-blur-md rounded-lg shadow-lg dark:bg-gray-900/70">
        <AiOutlineWarning className="text-6xl text-cyan-600 mb-4" />
        <h2 className="mb-4 text-4xl font-extrabold text-gray-800 dark:text-gray-200">
          Oops! Something went wrong.
        </h2>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
          We couldn't process your request. Please try again or return to the homepage.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => reset()}
            className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 font-semibold text-cyan-600 border border-cyan-600 rounded-lg shadow-md hover:bg-cyan-600 hover:text-white hover:shadow-lg transition-transform transform hover:scale-105"
          >
            Back to Homepage
          </Link>
        </div>
      </section>
    </div>
  );
}
