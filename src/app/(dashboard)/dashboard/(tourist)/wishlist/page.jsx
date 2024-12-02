"use client";

import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import Spinner from "@/components/shared/Spinner/Spinner";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const WishlistPage = () => {
  const [bookings, setbookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { data: session } = useSession();
  const userEmail = session?.user?.email;

  useEffect(() => {
    if (userEmail) {
      const fetchBookings = async () => {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_URL}/api/all-bookings/${userEmail}`
          );
          setbookings(response.data || []);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
      fetchBookings();
    }
  }, [userEmail]);

  const handleDelete = async (bookingId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "This action cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await axios.delete(`/api/all-bookings/${bookingId}`);
        if (response.status === 200) {
          Swal.fire("Deleted!", "Your booking has been deleted.", "success");
        } else {
          Swal.fire(
            "Failed!",
            "Failed to delete booking. Please try again.",
            "error"
          );
        }
      }
    } catch (err) {
      console.error("Error deleting booking:", err);
      Swal.fire(
        "Error!",
        "An error occurred while deleting the booking.",
        "error"
      );
    }
  };
  if (loading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <div className="breadcrumbs h-[70px] text-sm bg-gray-800 backdrop-blur-lg  py-5 sticky top-0 shadow-bottom-shadow z-40 border border-gray-600">
        <ul className="px-5">
          <Link href="/">
            <li className="text-white">Home</li>
          </Link>
          <GoChevronRight className="text-lg text-white " />
          <Link href="/dashboard/wishlist">
            <li className="text-lg font-bold text-cyan-600">My Wishlist</li>
          </Link>
        </ul>
      </div>
      <div className="max-w-screen-xl mx-auto overflow-x-auto my-5">
        <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow-lg">
          <thead className="bg-gradient-to-r from-cyan-600 to-purple-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Name
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Destination
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Booking Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Travel Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Amount Paid
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.filter((booking) => booking.status === "wish").length >
            0 ? (
              bookings
                .filter((booking) => booking.status === "wish")
                .map((booking) => (
                  <tr
                    key={booking._id}
                    className="hover:bg-cyan-50 hover:scale-95 hover:shadow-xl transform transition-all duration-300"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Image
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full"
                        src={booking?.image || null}
                        alt={booking.title || "Booking Image"}
                      />
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {booking.name}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {booking.placeName || "Unknown Location"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(booking.bookingDate).toLocaleDateString() ||
                        "N/A"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(booking.travelDate).toLocaleDateString() ||
                        "N/A"}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-yellow-600">
                      {booking.status}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      ${booking.price || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <button
                        onClick={() => handleDelete(booking._id)}
                        className="ml-3 text-red-600 hover:text-red-800 font-bold"
                      >
                        <RiDeleteBin6Line className="text-2xl" />
                      </button>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-6 text-gray-500">
                  No booked bookings available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishlistPage;
