"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <section classname="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
        <div classname="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div classname="max-w-md text-center">
            <h2 classname="mb-8 font-extrabold text-9xl dark:text-gray-400">
              <span classname="sr-only">Error</span>404
            </h2>
            <p classname="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p classname="mt-4 mb-8 dark:text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <a
              rel="noopener noreferrer"
              href="#"
              classname="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
            >
              Back to homepage
            </a>
          </div>
        </div>
      </section>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
