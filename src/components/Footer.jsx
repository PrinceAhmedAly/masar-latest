import { HeartIcon } from "@heroicons/react/24/outline";
import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-50 text-black py-5 pt-8">

      <div className="container mx-auto">
        <div className="flex justify-around items-center flex-wrap">
          <div>
            جميع الحقوق محفوظة
          </div>
          <div>
            <p>&copy; {new Date().getFullYear()} موقع مسار بلا حواجز</p>
          </div>
        </div>

      </div>

      <div className="flex justify-center items-center flex-row-reverse">
        
        <p className="flex items-center justify-center flex-row-reverse">Made with 
            <span className="mx-1">
                <HeartIcon className="h-5 w-5"/>
                </span> 
            by
        </p>
            <a href="https://fb.com/ahmedhamdan.page" className="rounded-md mx-1 text-md hover:shadow-lg hover:text-purple-800 transition duration-300 flex items-center justify-center" target="_blank">Dreamer</a>
        </div>
    </footer>
  );
}

export default Footer;
