import React from "react";

const Gifts = () => {
  return (
    <div>
      <div className="dropdown dropdown-hover">
        <label tabIndex={0}>GIFTS</label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <div
              className="hero min-h-screen flex flex-col"
              style={{
                backgroundImage: "url(https://i.ibb.co/WgYhrcN/5.jpg)",
              }}
            >
              <div className="flex-grow"></div>
              <aside className="text-center pb-5">
                <h1 className=" text-2xl text-white font-semibold ml-9 pl-2 mt-5">
                  RUNNER SNEAKER
                </h1>
                <button className="btn btn-outline text-black border border-black mt-3 w-40 bg-white p-3 ml-10">
                  FOR WOMEN
                </button>
              </aside>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Gifts;
