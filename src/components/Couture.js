import React from "react";

const Couture = () => {
  return (
    <div>
      <div className="dropdown dropdown-hover">
        <label tabIndex={0}>
          COUTURE
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Couture;
