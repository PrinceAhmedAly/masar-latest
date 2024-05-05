import React from "react";

function HowToWork() {
  return (
    <div className="w-full h-full flex items-center justify-evenly flex-row">
      <div className="flex items-center gap-2 text-xs sm:text-base flex-col">
        <span className=" sm:inline text-white">إفتح الموقع</span>
        <img src="./open.png" alt="scan code" className="w-10 md:w-20 h-auto"/>
      </div>

      <div className="flex items-center gap-2 text-xs sm:text-base flex-col">
        <span className="sm:inline text-white"> إمسح الكود</span>
        <img src="./scan.png" alt="scan code" className="w-10 md:w-20 h-auto"/>
      </div>

      <div className="flex items-center gap-2 text-xs sm:text-base flex-col">
        <span className="sm:inline text-white">شاهد الفيديو</span>
        <img src="./play.png" alt="scan code" className="w-10 md:w-20 h-auto"/>
      </div>
    </div>
  );
}

export default HowToWork;
