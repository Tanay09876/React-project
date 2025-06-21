import React, { useEffect, useState } from 'react'

const OnlineStatusChecker = () => {
    const [online, setOnline] = useState(navigator.onLine)
    useEffect(() => {
        const handleOnline = () => {
            setOnline(true);
        }

        const handleOffline = () => {
            setOnline(true);
        }
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOnline);

        }
    }, [])
    return (
    <div className="p-6 bg-gray-50 min-h-screen dark:bg-gray-900 flex justify-center items-center">
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow hover:shadow-md transition">
            <h1 className="text-2xl font-bold mb-4">Online Status Checker</h1>
            <p className="text-lg">Your current online status is:</p>
        </div>

        <div className={`mt-4 p-4 rounded-lg text-white ${online ? 'bg-green-500' : 'bg-red-500'}`}>
            <p className="text-xl font-semibold">{online ? 'You are online' : 'You are offline'}</p>
        </div>
    </div>

        
    )
}

export default OnlineStatusChecker