import { FaceSmileIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

function AboutUS() {
  return (
    <div className="container mx-auto flex min-h-96">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <img src="./about.png" alt="about site image" className="w-full" />
      </div>

      <div className="w-1/2 flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl text-right my-4 flex items-center flex-row-reverse">
          <FaceSmileIcon className="w-8 h-8 mx-2"/>
          من نحن؟</h1>
        <p className="w-5/6 text-sm md:text-lg">
          نحن فريق من طالبات كلية الآداب قسم الفئات الخاصة قمنا بإنشاء هذا
          الموقع لخدمة الصم داخل جامعة سوهاج.
        </p>
        <div className="my-5">
          <Link to={"/masar/about"} className="bg-blue-500 hover:bg-blue-600 text-white font:semibold py-2 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-10 my-3 flex flex-row-reverse">
          <QuestionMarkCircleIcon className="w-7 h-7 mr-1" />
            إعرف أكثر
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUS;
