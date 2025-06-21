import React from "react"
import Image from "../assets/img.jpg"

function Home()  {
  return (
    <div>
         <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-yellow-200 px-6 py-12">
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-12">

        <div className="w-full md:w-1/2">
          <img
            src={Image}
            alt="Food Banner"
            className="rounded-xl shadow-lg"
          />
        </div>

      
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-brown-800 mb-4">
            <span className="text-[brown]">Welcome</span>
          </h1>
          <h2 className="text-3xl font-semibold text-blue-600 mb-2">
            To Ultimate
          </h2>
          <h3 className="text-2xl font-bold text-red-700 mb-4">
            Food Delivery App — Parul-Zomato
          </h3>
          <p className="text-lg italic text-red-900 mb-6">
            “Good Food with Good Mindset” 🍽️
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-200">
            Explore Now 🚀
          </button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Home


