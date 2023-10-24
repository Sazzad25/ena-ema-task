import React from "react";
import Explore from "./Explore";
import Couture from "./Couture";
import Gifts from "./Gifts";
import Men from "./Men";
import Women from "./Women";
import NewArrivals from "./NewArrivals";
import Login from "./Login";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b border-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>BALENCIAGA</li>
          </ul>
        </div>
        <h1 className="">
          <NewArrivals />
        </h1>
        <h1 className="ml-3 mr-3">
          <Women />
        </h1>
        <h1 className="">
          <Men />
        </h1>
        <h1 className="ml-3 mr-3">
          <Gifts />
        </h1>
        <h1 className="">
          <Couture />
        </h1>
        <h1 className="ml-3">
          <Explore />
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" px-1">
          <Link className="text-xl font-bold" to="/">
            BALENCIAGA
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/client-services' className="">CLIENT SERVICES</Link>
        <Link to="/login" className="ml-3 mr-3">
          Login
        </Link>
        <Link to='/wishlist-show'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
