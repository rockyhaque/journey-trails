"use client";

import React, { useEffect, useState } from "react";
import { FaPlane, FaHeart, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import axios from "axios";

const ProfilePage = () => {
  const { data: session } = useSession();
  const role = session?.user?.role?.toUpperCase();
  const [totalBookings, setTotalBookings] = useState(0);
  const [totalWishlist, setTotalWishlist] = useState(0);

  useEffect(() => {
    if (session?.user?.email) {
      const fetchTotalData = async () => {
        try {
          // Fetch all bookings
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_URL}/api/all-bookings/${session.user.email}`
          );
          setTotalBookings(response.data.length || 0);

          // Fetch wishlist items (filter by "wish" status)
          const wishlistItems = response.data.filter(
            (booking) => booking.status === "wish"
          );
          setTotalWishlist(wishlistItems.length || 0);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchTotalData();
    }
  }, [session?.user?.email]);

  return (
    <div className="bg-gradient-to-br from-black via-cyan-600 to-blue-950 text-white p-10 h-full">
      <div className="bg-gradient-to-br from-black via-cyan-600 to-blue-950 text-white rounded-lg w-full max-w-4xl mx-auto shadow-xl p-10">
        {/* Header Section */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-bold">{session?.user?.name} Profile</h1>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center mt-6">
          {session?.user?.image ? (
            <Image
              width={96}
              height={96}
              src={session?.user?.image}
              alt="User"
              className="w-24 h-24 rounded-full border-4 border-cyan-500 shadow-md mx-auto md:mx-0"
            />
          ) : (
            <div className="w-24 h-24 rounded-full border-4 border-cyan-500 shadow-md mx-auto md:mx-0 bg-gray-300"></div> // Fallback element
          )}

          <div className="ml-6 mt-4 md:mt-0 text-center md:text-left">
            <h2 className="text-2xl font-bold">{session?.user?.name}</h2>
            <p className="text-gray-400 italic">{session?.user?.email}</p>
            <p className="text-purple-400 font-thin text-sm">{role}</p>
          </div>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-300 p-6 rounded-lg text-center shadow-lg hover:bg-gray-400 transition transform hover:-translate-y-1">
            <FaPlane className="text-4xl text-blue-400 mx-auto mb-3" />
            <p className="text-xl text-black font-bold">{totalBookings}</p>
            <p className="text-black">Total Bookings</p>
          </div>
          <div className="bg-gray-300 p-6 rounded-lg text-center shadow-lg hover:bg-gray-400 transition transform hover:-translate-y-1">
            <FaHeart className="text-4xl text-red-400 mx-auto mb-3" />
            <p className="text-xl text-black font-bold">{totalWishlist}</p>
            <p className="text-black">Favorite Destinations</p>
          </div>
          <div className="bg-gray-300 p-6 rounded-lg text-center shadow-lg hover:bg-gray-400 transition transform hover:-translate-y-1">
            <FaCalendarAlt className="text-4xl text-yellow-400 mx-auto mb-3" />
            <p className="text-xl text-black font-bold">
              {new Date().getFullYear()}
            </p>
            <p className="text-black">Next Trip</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 bg-gray-300 p-6 rounded-lg text-center shadow-lg">
          <h3 className="text-lg font-bold text-black">
            Start Planning Your Next Adventure!
          </h3>
          <Link href="/destinations">
            <button className="mt-4 md:px-6 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition duration-300">
              Explore Destinations
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
