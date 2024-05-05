import { HandRaisedIcon, QrCodeIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import React from 'react'

function VideoPageHero({place}) {
    return (
        <div className="w-full min-h-96 flex items-center gap-5 container mx-auto px-4 ">
        <div className="w-1/2 h-full flex items-left justify-center flex-col">
            <h2 className="text-xl font-bold md:text-4xl flex items-center">
                مرحبا بك 
                <HandRaisedIcon className="w-4 md:w-7 mr-2"/>
            </h2>
            <p className="text-lg md:text-2xl my-2">
                انت الآن أمام {place}
            </p>
            <p className="text-md md:text-xl">
                برجاء اختيار وجهتك عن طريق الضعط على المربع المخصصص لكل وجهة
            </p>
            {/* <button className="bg-blue-400 hover:bg-blue-600 text-white text-xs md:text-md py-2 my-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center w-36 md:w-40">
                عرض الفديوهات
            <VideoCameraIcon className="w-5 h-5 mr-1"/>
            </button> */}
        </div>

        <div className="w-1/2 h-full flex items-center justify-center">
            <img src="./welcome.png" alt="hello in sign language" className=" w-full md:w-3/5"/>
        </div>
    </div>
    )
}

export default VideoPageHero
