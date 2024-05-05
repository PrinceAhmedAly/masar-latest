import React from "react";

function Spinner() {
  return (
    <>
      <div className="h-screen w-full relative flex items-center justify-center">
        <div className="">
          <div className="w-32 h-32 border-8 border-transparent border-t-blue-500 border-b-pink-500 rounded-full animate-spin-slow flex items-center justify-center"></div>
          <img
            src="./logo.png"
            alt="spinner img logo"
            className="w-26 h-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </>
  );
}

export default Spinner;
