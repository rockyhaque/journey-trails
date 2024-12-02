"use client";

import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import Spinner from "@/components/shared/Spinner/Spinner";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoChevronRight } from "react-icons/go";
import Swal from "sweetalert2";

const AllBookingsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookings, setbookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { data: session } = useSession();
  const userEmail = session?.user?.email;

  const modalHandler = async (selected) => {
    setIsOpen(false);
    console.log("user role updated", selected);
  };

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
    <div className="max-w-screen-xl mx-auto">
        <div className="breadcrumbs h-[70px] text-sm bg-gray-800 backdrop-blur-lg  py-5 sticky top-0 shadow-bottom-shadow z-40 border border-gray-600">
        <ul className="px-5">
          <Link href="/">
            <li className=" text-white">Home</li>
          </Link>
          <GoChevronRight className="text-lg font-bold text-white" />
          <Link href="/dashboard/manage-users">
            <li className="text-lg font-bold text-cyan-600">All Bookings</li>
          </Link>
        </ul>
      </div>
      <div className=" overflow-x-auto my-5">
        <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow-lg">
          <thead className="bg-gradient-to-r from-cyan-600 to-purple-500 text-white">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
               Image
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                place Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Booking Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Tourist Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Tourist Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white  divide-y divide-gray-200 space-y-10">
            {bookings.map((booking) => (
              <tr
                key={booking._id}
                className=" hover:shadow-xl hover:scale-95 hover:bg-cyan-50 transform transition-all duration-300"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <Image
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-md"
                    src={booking.placeImage || null}
                    alt="Jane Cooper"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {booking.placeName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  $ {booking.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {booking.bookingDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {booking.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {booking.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => {
                      handleDelete(booking._id);
                      setIsOpen(true);
                    }}
                    className="text-red-600 hover:text-red-800 font-bold"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBookingsPage;
