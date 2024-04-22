import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section class="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
      <div class="container flex flex-col items-center ">
        <div class="flex flex-col gap-6 max-w-md text-center">
          <h2 class="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
            <span class="sr-only">Error 404!</span>
          </h2>
          <p class="text-2xl md:text-3xl dark:text-gray-300">
            Oops! This page could not be found.
          </p>
          <Link
            to="/"
            class="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
