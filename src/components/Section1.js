import React from "react";

const Section1 = () => {
  return (
    <div>
      {/* // 1st */}
      <div
        className="hero min-h-screen flex flex-col"
        style={{
          backgroundImage: "url(https://i.ibb.co/nnmFggy/1.jpg)",
        }}
      >
        <div className="flex-grow"></div>
        <aside className="text-center pb-5">
          <h1 className=" text-2xl font-semibold ml-9 pl-2 mt-5">
            LE CAGOLE SLING
          </h1>
          <button className="btn btn-outline border-2 border-black mt-3 w-40 bg-white p-3 ml-10 text-black">
            SHOP NOW
          </button>
        </aside>
      </div>

      {/* // 2nd */}
      <div
        className="hero min-h-screen flex flex-col"
        style={{
          backgroundImage: "url(https://i.ibb.co/pbcKBFC/2.jpg)",
        }}
      >
        <div className="flex-grow"></div>
        <aside className="text-center pb-5">
          <h1 className=" text-2xl font-semibold ml-9 pl-2 mt-5">WINTER 23</h1>
          <button className="btn btn-outline border border-black mt-3 w-40 bg-white p-3 ml-10 text-black">
            FOR WOMEN
          </button>
        </aside>
      </div>
      {/* // 3rd */}
      <div
        className="hero min-h-screen flex flex-col"
        style={{
          backgroundImage: "url(https://i.ibb.co/YRf9nG5/3.jpg)",
        }}
      >
        <div className="flex-grow"></div>
        <aside className="text-center pb-5">
          <h1 className=" text-2xl font-semibold ml-9 pl-2 mt-5">
            STEROID BOOTIE
          </h1>
          <button className="btn btn-outline text-black border border-black mt-3 w-40 bg-white p-3 ml-10">
            SHOP NOW
          </button>
        </aside>
      </div>
      {/* // 4th */}
      <div
        className="hero min-h-screen flex flex-col"
        style={{
          backgroundImage: "url(https://i.ibb.co/bbSQd24/4.jpg)",
        }}
      >
        <div className="flex-grow"></div>
        <aside className="text-center pb-5">
          <h1 className=" text-2xl font-semibold ml-9 pl-2 mt-5">WINTER 23</h1>
          <button className="btn btn-outline text-black border border-black mt-3 w-40 bg-white p-3 ml-10">
            FOR MEN
          </button>
        </aside>
      </div>
      {/* // 5th */}
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
    </div>
  );
};

export default Section1;
