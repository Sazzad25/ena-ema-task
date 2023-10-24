import React from "react";
import Video from "./Video";
const Explore = () => {
  return (
    <div>
      <div className="group relative text-xl">
        <button className=" text-gray-700 py-4 px-6 rounded inline-flex items-center group">
          <span className="mr-1">EXPLORE</span>
         
        </button>

        <h1 className="rounded absolute hidden text-gray-700 pt-1 group-hover:block w-full h-full">
          <Video />
        </h1>
      </div>
    </div>
  );
};

export default Explore;
