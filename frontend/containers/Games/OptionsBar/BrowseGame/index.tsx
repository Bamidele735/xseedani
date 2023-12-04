import React from "react";
import Styles from "./BrowseGame.module.css";
export default function BrowseGame() {
  return (
    <div className={Styles.BrowseGame}>
      <h1>Browse Games</h1>
      <div className="hs-dropdown relative inline-flex justify-end w-full">
        <button
          id="hs-dropdown-transform-style"
          type="button"
          className="w-full hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md  font-medium bg-white text-gray-700 shadow-sm align-middle  focus:outline-none  transition-all text-sm"
        >
          <span> Sort By:</span>
          Rating
          <svg
            className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="hs-dropdown-menu w-72 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10">
          <div
            className={`${Styles.dropDown_bg} hs-dropdown-open:ease-in hs-dropdown-open:opacity-100 hs-dropdown-open:scale-100 transition ease-out opacity-0 scale-95 duration-200 mt-2 origin-top-left min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:border dark:border-gray-700 dark:divide-gray-700`}
            aria-labelledby="hs-dropdown-transform-style"
            data-hs-transition
          >
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              Newsletter
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              Purchases
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              Downloads
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              Team Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
