import Image from "next/image";
import React from "react";
import { MdEditLocationAlt } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiDetail } from "react-icons/bi";
import { GoChevronRight } from "react-icons/go";
import Link from "next/link";
const DestinationsPage = () => {
  return (
    <div>
         <div className="breadcrumbs h-[70px] text-sm bg-gray-800 backdrop-blur-lg  py-5 sticky top-0 shadow-bottom-shadow z-40 border border-gray-600">
        <ul className="px-5">
          <Link href="/">
            <li className="text-white">Home</li>
          </Link>
          <GoChevronRight className="text-white text-lg font-bold"/>
          <Link href="/dashboard/destinations">
          <li className="text-lg font-bold text-cyan-600">
            Destinations
          </li>
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
            <tr className="hover:bg-cyan-50 hover:scale-95 hover:shadow-xl transform transition-all duration-300">
              <td className="px-6 py-4 whitespace-nowrap">
                <Image
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                  src="https://i.ibb.co.com/xC7RTSS/Pexels-Photo-by-Bruno-Palace.jpg"
                  alt="John Doe"
                />
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                sent martin
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                1500 $
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
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
                  data-tip="Delete"
                  className="text-red-600 hover:text-red-800 font-bold tooltip tooltip-error"
                >
                  <RiDeleteBin6Line className="text-2xl" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DestinationsPage;
