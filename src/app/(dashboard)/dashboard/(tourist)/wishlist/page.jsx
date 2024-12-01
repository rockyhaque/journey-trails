import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";

const WishlistPage = () => {
  return (
    <div>
      <SectionHeading title="Wishlist"></SectionHeading>
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
            <tr className="hover:bg-cyan-50 hover:scale-95 hover:shadow-xl transform transition-all duration-300">
              <td className="px-6 py-4 whitespace-nowrap">
                <Image
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-xl"
                  src="https://i.ibb.co.com/x56CfCR/paris-france-gallery-2.jpg"
                  alt="John Doe"
                />
              </td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                John Doe
              </td>

              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                Paris, France
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">2024-11-20</td>
              <td className="px-6 py-4 text-sm text-gray-500">2024-12-05</td>
              <td className="px-6 py-4 text-sm font-medium text-yellow-600">
                Pending
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">$1500</td>
              <td className="px-6 py-4 text-sm font-medium">
                <button className="ml-3 text-red-600 hover:text-red-800 font-bold">
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

export default WishlistPage;
