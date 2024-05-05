import { NewspaperIcon, PencilSquareIcon, PlayIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import React from "react";

function DistCard({ title, imageSrc, onPlayButtonClick, onEditButtonClick }) {
  return (
    <>
      <div>
        <div className="min-h-32 md:h-24 bg-blue-100 flex items-center justify-evenly rounded-md shadow-2xl my-3 px-2">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-sm md:text-base">{title}</h1>
            <div className="flex items-center justify-center gap-1">
              <Button
                className="flex items-center w-auto h-8 md:h-7 text-purple-800"
                ripple={true}
                color="amber"
                size="sm"
                onClick={onPlayButtonClick}
              >
                <PlayIcon className="w-5 h-5" />
              </Button>
              <Button
                className="flex items-center w-auto h-8 md:h-7 text-purple-800"
                ripple={true}
                color="amber"
                size="sm"
                onClick={onEditButtonClick}
              >
                <PencilSquareIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <img
            src={imageSrc}
            alt="distnation-image"
            className="w-1/3 h-auto transition-all hover:scale-110"
          />
        </div>
      </div>
    </>
  );
}

export default DistCard;
