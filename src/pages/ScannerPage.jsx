import React, { useState, useEffect } from "react";
import QRScannerComponent from "../components/qrScanner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CursorArrowRippleIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Scanner() {
  const [cameraAccess, setCameraAccess] = useState(false);

  const checkCameraAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraAccess(true);
      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      console.error("Error accessing camera:", error);
      setCameraAccess(false);
      if (error.name === "NotAllowedError") {
        toast.error("تم رفض الوصول إلى الكاميرا");
        toast.error("برجاء السماح للموقع للوصول إلى الكاميرا");
      } else {
        toast.error("حدث خطأ في الوصول إلى الكاميرا");
      }
    }
  };

  useEffect(() => {
    checkCameraAccess();
  }, []);

  const requestCameraAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraAccess(true);
      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      console.error("Error accessing camera:", error);
      setCameraAccess(false);
      // checkCameraAccess();
      toast.error("قم بالسماح للوصول إلى الكاميرا على المتصفح الخاص بك");
    }
  };

  return (
    <>
      <div className="mx-auto py-1 h-auto my-5 flex items-center justify-center flex-col">
        <h1 className="text-base md:text-xl text-center">
          من فضلك قم بمسح الكود الموجود على البانر لفتح الفديوهات الإرشادية
        </h1>

        <div className="flex items-center justify-center my-4 w-full">
          <div className="flex items-center justify-center relative min-w-1/2">
            <img
              src="./mobile-qr.jpg"
              alt="mobile with qr code"
              className="w-full sm:w-auto h-auto sm:mt-5"
            />
            <div
              className="video-container w-1/4 h-1/4 absolute flex items-center justify-center text-red-300 bg-red-50"
              style={{ top: "31%" }}
            >
              {cameraAccess ? (
                <QRScannerComponent />
              ) : (
                <div
                  className={`${
                    cameraAccess ? "hidden" : ""
                  } text-center text-xs md:text-base`}
                >
                  برجاء السماح بالوصول إلى الكاميرا
                  <button
                    className="flex items-center mx-auto mt-2 bg-blue-500 hover:bg-blue-700 text-white p-1 rounded text-xs md:text-base"
                    onClick={requestCameraAccess}
                  >
                    إفتح الكاميرا
                    <VideoCameraIcon className="mr-1 w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* manual select */}
      <div>
        <div className="container mx-auto">
          <h1 className="text-base md:text-xl flex items-center justify-center mx-5 bg-purple-200 rounded-md w-auto px-5 py-2 text-white">
            أو قم بالإختيار يدويا
            <CursorArrowRippleIcon className="w-5 h-5 mr-2" />
          </h1>

          {/* manual colleges container */}
          <div className="flex gap-5  md:flex-row flex-col items-center my-10">
            <Link to={"/masar-latest/center"}
             className="flex items-center justify-evenly w-2/3 md:w-1/3 bg-blue-50 h-24 rounded-md shadow-xl cursor-pointer">
              <span>مركز خدمة ذوي الإعاقة</span>
              <img
                src="./disabled-center.png"
                alt="مركز خدمة ذوي الإعاقة"
                className="w-16 h-auto"
              />
            </Link>

            <Link to={"/masar-latest/arts"}
             className="flex items-center justify-evenly my-4 w-2/3 md:w-1/3 bg-blue-50 h-24 rounded-md shadow-xl cursor-pointer">
              <span>كلية الآداب</span>
              <img
                src="./sponsor3.png"
                alt="كلية الآداب"
                className="w-16 h-auto"
              />
            </Link>

            <div className="flex items-center justify-evenly w-2/3 md:w-1/3 bg-red-100 h-24 rounded-md shadow-xl cursor-not-allowed">
              <span className="flex flex-col">
                <span> كلية التربية النوعية</span>
                <span className="bg-red-500 text-white rounded-md p-1 text-xs">
              سيتم إضافتها قريباً
                </span>
              </span>
              <img
                src="./education-college.png"
                alt=" كلية التربية النوعية"
                className="w-12 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Scanner;
