import React, { Component } from 'react';

export class AddSeller extends Component {
  render() {
    return (
      <div className="flex items-center justify-center min-h-screen  bg-violet-700 px-4">
        <div className="bg-indigo-500  backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-xl">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            📦 Add New Seller
          </h2>

          <form className="space-y-6">
        
            <div>
              <label className="block text-white font-medium mb-1">Seller Name</label>
              <input
                type="text"
                placeholder="e.g. Alpha Traders"
                className="w-full p-3 rounded-lg bg-white bg-opacity-87 text-black placeholder-purple/95 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="XYZ@email.com"
                className="w-full p-3 rounded-lg  bg-white bg-opacity-87  text-black placeholder-purple/95 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

          
            <div>
              <label className="block text-white font-medium mb-1">Shop Name</label>
              <input
                type="text"
                placeholder="e.g. ABC Traders"
                className="w-full p-3 rounded-lg bg-white bg-opacity-87  text-black placeholder-purple/95 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

           
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-white font-medium mb-1">Phone Number</label>
                <input
                  type="text"
                  placeholder="9876543210"
                  className="w-full p-3 rounded-lg bg-white bg-opacity-87 text-black placeholder-purple/95 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="flex-1">
                <label className="block text-white font-medium mb-1">Shop Address</label>
                <input
                  type="text"
                  placeholder="City, Street, Pincode"
                  className="w-full p-3 rounded-lg bg-white bg-opacity-87  text-black placeholder-purple/95 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

        
            <div className="text-center">
              <button
                type="submit"
                className="py-3 px-48 bg-white text-purple-700 font-semibold rounded-xl hover:scale-105 duration-300"
              >
                ✅ Add Seller
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddSeller;