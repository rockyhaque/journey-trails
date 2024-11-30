"use client"

import UpdateUserModal from '@/components/dashboard/UpdateUserModal/UpdateUserModal';
import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';
import Image from 'next/image';
import React, { useState } from 'react';

const ManageUserPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    // user role updated  modal handler 
    const modalHandler = async (selected) => {
        setIsOpen(false)
        console.log('user role updated', selected);
    }
    console.log(isOpen, 'update role clicked');


    return (
        <div className='max-w-screen-xl mx-auto'>
            <SectionHeading title={'All Users'} />
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
                                Role
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                            >
                                Email
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
                                Admin
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                jane.cooper@example.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button 
                                onClick={() => setIsOpen(true)}
                                className="text-red-600 hover:text-red-800 font-bold">
                                    Update Role
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
                                Admin
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                john.doe@example.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button
                                    onClick={() => setIsOpen(true)}
                                    className="text-red-600 hover:text-red-800 font-bold">
                                    Update Role
                                </button>
                                {/* ==================modal=================== */}
                          
                                    <UpdateUserModal

                                        setIsOpen={setIsOpen}
                                        isOpen={isOpen}
                                        modalHandler={modalHandler}
                                    />
                            
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ManageUserPage;