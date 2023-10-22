import React from "react";

const SearchBar = () => {
  return (
    <div class="flex items-center w-full border-b border-black">
      <button className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <input
        type="text"
        placeholder="WHAT ARE YOU LOOKING FOR?"
        class="rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
      />
    </div>
  );
};

export default SearchBar;
