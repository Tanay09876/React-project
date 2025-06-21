import React, { useEffect, useState } from 'react'




const AutoRefreshClock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date().toLocaleTimeString()); 
        },1000)
        
        return()=>{
            clearInterval(interval);
        }
        console.log(interval);
        
    })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  return (
    <>
    <h1 className="text-2xl font-bold mb-4 text-center mt-6">Auto Refresh Clock</h1>
    <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Current Time</h2>
            <p className="text-xl">{time}</p>
        </div>
    </div>

    
    </>
  )
}

export default AutoRefreshClock