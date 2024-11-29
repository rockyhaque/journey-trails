import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';
import Image from 'next/image';
import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const TouristPage = () => {
    return (
        <div>
            <SectionHeading title="Wish list" description="Check your wish list"></SectionHeading>
           <div className="max-w-screen-xl mx-auto overflow-x-auto my-5">
            <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow-lg">
                <thead className="bg-gradient-to-r from-cyan-600 to-purple-500 text-white">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                        >
                            Profile
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                        >
                            Username
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                        >
                            Wish list
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                        >
                            Date
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
                    <tr className=" hover:shadow-xl hover:scale-95 hover:bg-cyan-50 transform transition-all duration-300">
                        <td className="px-6 py-4 whitespace-nowrap">
                            <Image
                                width={40}
                                height={40}
                                className="h-10 w-10 rounded-full"
                                src="https://i.ibb.co.com/xC7RTSS/Pexels-Photo-by-Bruno-Palace.jpg"
                                alt="Jane Cooper"
                            />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Jane Cooper
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Cox's Bazar
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                           20-20-2024
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-red-600 hover:text-red-800 font-bold">
                            <RiDeleteBin6Line className="text-2xl" />
                            </button>
                        </td>
                    </tr>
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
                            John Doe
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      sent martin
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                           20-20-2024
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-red-600 hover:text-red-800 font-bold">
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

export default TouristPage;