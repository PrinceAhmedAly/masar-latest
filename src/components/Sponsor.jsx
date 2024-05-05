import React from "react";

function Sponsor() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-8">برعاية: </h2>
      <div className="flex justify-center items-center">
        <img src="./sponsor2.png" alt="sponsor 2" className="w-20 md:w-20 h-24 sm:w-20" />
        <img src="./sponsor3.png" alt="sponsor 3" className="w-24 md:w-28 h-auto mx-5 sm:w-24" />
        <img src="./sponsor1.png" alt="sponsor 1" className="w-20 md:w-20 h-auto sm:w-20" />
      </div>
    </div>
  );
}

export default Sponsor;
