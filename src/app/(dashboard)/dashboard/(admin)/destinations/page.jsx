"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdEditLocationAlt } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiDetail } from "react-icons/bi";
import axios from "axios";
import Spinner from "@/components/shared/Spinner/Spinner";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";
const DestinationsPage = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL}/api/all-places`
        );
        setDestinations(response.data.places || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchDestinations();
  }, []);

  const handleDelete = async (id) => {
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
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_URL}/api/all-places/${id}`
        );

        if (response.status === 200) {
          setDestinations((prevDestinations) =>
            prevDestinations.filter((destination) => destination._id !== id)
          );
          Swal.fire("Deleted!", "The destination has been deleted.", "success");
        } else {
          Swal.fire("Failed!", "Failed to delete destination.", "error");
        }
      }
    } catch (err) {
      console.error("Error deleting destination:", err);
      Swal.fire(
        "Error!",
        "An error occurred while deleting the destination.",
        "error"
      );
    }
  };

  const handleDetailsClick = (destinationId) => {
    router.push(`/destinations/${destinationId}`);
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
          <GoChevronRight className="text-white text-lg font-bold" />
          <Link href="/dashboard/destinations">
            <li className="text-lg font-bold text-cyan-600">Destinations</li>
          </Link>
        </ul>
      </div>
      <div className="max-w-screen-xl mx-auto overflow-x-auto my-5 p-2">
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
                Destination
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
                Details
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Update
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
            {destinations.map((destination) => (
              <tr
                key={destination._id}
                className="hover:bg-cyan-50 hover:scale-95 hover:shadow-xl transform transition-all duration-300"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <Image
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                    src={destination.coverImg}
                    alt={destination.title}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {destination.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {destination.amount} $
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleDetailsClick(destination._id)}
                    data-tip="Details"
                    className="text-cyan-600 hover:text-red-800 font-bold tooltip tooltip-info"
                  >
                    <BiDetail className="text-2xl" />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    data-tip="Update"
                    className="text-green-600 hover:text-red-800 font-bold tooltip tooltip-success"
                  >
                    <MdEditLocationAlt className="text-2xl" />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleDelete(destination._id)}
                    data-tip="Delete"
                    className="text-red-600 hover:text-red-800 font-bold tooltip tooltip-error"
                  >
                    <RiDeleteBin6Line className="text-2xl" />
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

export default DestinationsPage;
