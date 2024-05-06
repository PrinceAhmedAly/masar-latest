import React from 'react'
import { Link } from 'react-router-dom'

function DistLink( {routeLink, title, imgSrc, alt} ) {
    return (
        <Link to={routeLink}
        className="flex items-center justify-evenly w-2/3 md:w-1/3 bg-blue-50 h-24 rounded-md shadow-xl cursor-pointer">
         <span>{title}</span>
         <img
           src={imgSrc}
           alt={alt}
           className="w-16 h-auto"
         />
       </Link>
    )
}

export default DistLink
