import { LockClosedIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

function SimpleDialog({ isOpen, onClose, videoSrc , title }) {
  const handleClose = () => {
    onClose(); // Call the onClose function to close the dialog
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-3 my-10"
          style={{height: '90%'}}
          >
            <h2 className="text-md font-bold mb-4 text-center">{title}</h2>
            <div className="w-full h-4/5 mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src={videoSrc}
                title="Video Player"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex justify-start">
              <button
                onClick={handleClose}
                className="px-4 py-2 my-3 bg-red-300 rounded-md text-white hover:bg-gray-400 flex items-center"
              >
                إغلاق
                <XMarkIcon className="w-5 h-5 mr-1"/>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SimpleDialog;
