import React from "react";
import { FaMapMarkerAlt, FaPlane, FaHeart, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";

const TouristProfile = () => {
  return (
    <div className="bg-gradient-to-br from-black via-cyan-600 to-blue-950 text-white p-6 rounded-lg max-w-4xl mx-auto shadow-xl">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold">Tourist Profile</h1>
      </div>
      {/* Profile Section */}
      <div className="flex items-center mt-6">
        <Image
          width={96}
          height={96}
          src="https://i.ibb.co.com/yPmmNyF/rakibul-haq-roky.jpg"
          alt="User"
          className="w-24 h-24 rounded-full border-4 border-cyan-500 shadow-md"
        />
        <div className="ml-6">
          <h2 className="text-2xl font-bold">Rocky Haque</h2>
          <p className="text-gray-400 italic">rocky@gmail.com</p>
          <p className="text-gray-400 italic">Tourist</p>
          <p className="text-gray-400 flex items-center">
            <FaMapMarkerAlt className="mr-2 text-green-400" />
            New York, USA
          </p>
        </div>
      </div>
      {/* User Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-gray-300 p-6 rounded-lg text-center shadow-lg hover:bg-gray-400 transition transform hover:-translate-y-1">
          <FaPlane className="text-4xl text-blue-400 mx-auto mb-3" />
          <p className="text-xl text-black font-bold">15</p>
          <p className="text-black">Trips Taken</p>
        </div>
        <div className="bg-gray-300 p-6 rounded-lg text-center shadow-lg hover:bg-gray-400 transition transform hover:-translate-y-1">
          <FaHeart className="text-4xl text-red-400 mx-auto mb-3" />
          <p className="text-xl text-black font-bold">8</p>
          <p className="text-black">Favorite Destinations</p>
        </div>
        <div className="bg-gray-300 p-6 rounded-lg text-center shadow-lg hover:bg-gray-400 transition transform hover:-translate-y-1">
          <FaCalendarAlt className="text-4xl text-yellow-400 mx-auto mb-3" />
          <p className="text-xl text-black font-bold">2024</p>
          <p className="text-black">Next Trip</p>
        </div>
      
      </div>

      {/* CTA Section */}
      <div className="mt-8 bg-gray-300 p-6 rounded-lg text-center shadow-lg">
        <h3 className="text-lg font-bold text-black">Start Planning Your Next Adventure!</h3>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition duration-300">
          Explore Destinations
        </button>
      </div>
    </div>
  );
};

export default TouristProfile;
