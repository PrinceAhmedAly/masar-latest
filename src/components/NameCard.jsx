import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

function NameCard( {name, imgSrc} ) {
  return (
    <Card className="w-50 bg-purple-50 rounded-lg h-64">
      <CardHeader floated={false} className="h-auto ">
        <img
          src={imgSrc}
          alt="profile-picture"
        />
      </CardHeader>
      <CardBody className="text-center flex items-end justify-center">
        <h1 className="text-sm md:text-md font-bold">{name}</h1>
      </CardBody>
    </Card>
  );
}

export default NameCard;
