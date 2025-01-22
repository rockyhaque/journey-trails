"use client";
import UpdateUserModal from "@/components/dashboard/UpdateUserModal/UpdateUserModal";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import Spinner from "@/components/shared/Spinner/Spinner";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoChevronRight } from "react-icons/go";
import Swal from "sweetalert2";

const ManageUserPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const modalHandler = async (selectedRole) => {
    if (!selectedUser) return;
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_URL}/api/users/${selectedUser._id}`,
        { role: selectedRole }
      );
      if (response.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "User role updated successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === selectedUser._id
              ? { ...user, role: selectedRole }
              : user
          )
        );
        setIsOpen(false);
      }
    } catch (err) {
      console.error("Error updating user role:", err);
      Swal.fire({
        title: "Error!",
        text: "Failed to update user role. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_URL}/api/users?id=${userId}`
      );
      if (response.status === 200) {
        Swal.fire({
          title: "Deleted!",
          text: "User has been removed successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        setUsers(users.filter((user) => user._id !== userId));
      }
    } catch (err) {
      console.error("Error deleting user:", err);
      Swal.fire({
        title: "Error!",
        text: "Failed to delete user. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL}/api/users`
        );
        setUsers(response.data.users || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  if (loading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="breadcrumbs h-[70px] text-sm bg-gray-800 backdrop-blur-lg  py-5 sticky top-0 shadow-bottom-shadow z-40 border border-gray-600">
        <ul className="px-5">
          <Link href="/">
            <li className="text-white">Home</li>
          </Link>
          <GoChevronRight className="text-lg text-white font-bold" />
          <Link href="/dashboard/manage-users">
            <li className="text-lg font-bold text-cyan-600">Manage Users</li>
          </Link>
        </ul>
      </div>
      <div className="max-w-screen-xl mx-auto overflow-x-auto my-5">
        <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow-lg">
          <thead className="bg-gradient-to-r from-cyan-600 to-purple-500 text-white w-full">
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
            {users.map((user) => (
              <tr
                key={user._id}
                className=" hover:shadow-xl hover:scale-95 hover:bg-cyan-50 transform transition-all duration-300"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <Image
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                    src={user?.image || null}
                    alt={user.name}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => {
                      setSelectedUser(user);
                      setIsOpen(true);
                    }}
                    className="text-blue-600 hover:text-blue-800 font-bold"
                  >
                    Update Role
                    <UpdateUserModal
                      setIsOpen={setIsOpen}
                      isOpen={isOpen}
                      modalHandler={modalHandler}
                    />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="text-red-600 hover:text-red-800 font-bold"
                  >
                    Remove
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

export default ManageUserPage;
