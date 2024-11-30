import React from "react";
import {
  FaHome,
  FaUser,
  FaCog,
  FaPlus,
  FaListAlt,
  FaTicketAlt,
  FaHeart,
  FaClipboardList,
  FaUserCircle,
} from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white">
      <div className="p-4 text-2xl font-bold text-center border-b border-gray-700">
        <Link href="/" className="text-blue-500">
          JourneyTrails
        </Link>
      </div>

      <nav className="flex-1 mt-4 space-y-2">
      <SidebarItem
          icon={<FaUser size={20} />}
          label="Profile"
          href="/dashboard/profile"
        />
        <SidebarItem
          icon={<FaPlus size={20} />}
          label="Add Place"
          href="/dashboard/add-place"
        />
        <SidebarItem
          icon={<FaListAlt size={20} />}
          label="Destinations"
          href="/dashboard/destinations"
        />
        <SidebarItem
          icon={<FaTicketAlt size={20} />}
          label="All Bookings"
          href="/dashboard/all-bookings"
        />
        <SidebarItem
          icon={<FaUser size={20} />}
          label="Manage Users"
          href="/dashboard/manage-users"
        />
        <SidebarItem
          icon={<FaHeart size={20} />}
          label="My Wishlist"
          href="/dashboard/wishlist"
        />
        <SidebarItem
          icon={<FaClipboardList size={20} />}
          label="My Bookings"
          href="/dashboard/my-bookings"
        />
      </nav>

      <div className="p-4 border-t border-gray-700">
        <p className="text-sm text-center">© 2024 JourneyTrails</p>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, href }) => (
  <Link href={href} passHref>
    <div className="flex items-center p-3 space-x-3 hover:bg-gray-700 cursor-pointer">
      {icon}
      <span>{label}</span>
    </div>
  </Link>
);

export default Sidebar;
