import React from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-xl font-bold text-orange-500">Wish-list Show Page</h1>
      <h4 className="text-xl font-semibold text-fuchsia-500">
        Coming Soon......
      </h4>
      <h1 className="text-xl">
        <Link to="/" className="font-semibold text-green-500">
          Back to Home
        </Link>
      </h1>
    </div>
  );
};

export default Wishlist;
