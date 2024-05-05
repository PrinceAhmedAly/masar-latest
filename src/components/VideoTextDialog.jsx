import React from 'react'
import { LockClosedIcon, XMarkIcon } from "@heroicons/react/24/outline";

function VideoTextDialog( { isTextDialogOpen, onClose, textSrc , textTitle } ) {
    const handleTextDialogClose = () => {
        onClose(); // Call the onClose function to close the dialog
      };
    
      return (
        <>
          {isTextDialogOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
              <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-3 my-10"
              style={{height: '75%'}}
              >
                <h2 className="text-md font-bold mb-4 text-center">{textTitle}</h2>
                <div className="w-full h-4/5 text-center mobile-overflow-y-scroll">
                    <p className="">
                        {textSrc}
                    </p>
                </div>
                <div className="flex justify-start">
                  <button
                    onClick={handleTextDialogClose}
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
export default VideoTextDialog
