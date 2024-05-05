import { QrCodeIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import HowToWork from "./HowToWork";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    
    <div className="container mx-auto relative h-auto">
      <div className="text-black py-12 px-4"
      style={{height: "70vh"}}>
        <div className="max-w-4xl mx-auto text-center mt-1 md:mt-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white">
            مرحبا بك في موقع مسار بلا حواجز
          </h1>
          <p className="text-lg mb-8 text-white">
            الآن يمكنك الذهاب إلى وجهتك ببساطة عن طريق مسح الكود فقط وسيظهر لك
            فيديو بلغة الإشارة يدلك على وجهتك
          </p>
          <div className="flex items-center justify-center gap-2 flex-col md:flex-row">
          <Link to="/masar/about" className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center w-2/3 md:w-1/3">
              إعرف أكثر
              <QuestionMarkCircleIcon className="w-7 h-7 mr-1" />
            </Link>
            <Link to="/masar/scanner" className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center w-2/3 md:w-1/3">
              إختر وجهتك
              <QrCodeIcon className="w-7 h-7 mr-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* how to work */}
      <div className="absolute h-32 w-full"
      style={{bottom: "-20px"}}>
        <div className="container mx-auto h-full shadow-lg w-4/5 backdrop-blur-sm rounded-md">
          <HowToWork/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
