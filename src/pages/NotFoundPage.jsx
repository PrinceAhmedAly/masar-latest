import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

function NotFoundPage() {
    return (
        <div className="w-full h-screen flex items-center justify-center flex-col font-xl">
            <div className="text-xl font-bold flex items-center">
                Not Found
                <ExclamationCircleIcon className="w-10 h-10 "/>
            </div>
            <div  className="text-xl">
                Error in Displaying the requested Page
            </div>


        </div>
    )
}

export default NotFoundPage
