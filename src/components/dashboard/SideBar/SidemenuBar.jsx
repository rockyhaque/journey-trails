"use client";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { SlMenu } from "react-icons/sl";
import Image from "next/image";
import logo from "../../../../public/assets/logo/logo.png";
import Link from "next/link";
import {
  FaUser,
  FaPlus,
  FaListAlt,
  FaTicketAlt,
  FaHeart,
  FaClipboardList,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
import Spinner from "@/components/shared/Spinner/Spinner";
import { useSession } from "next-auth/react";

const SidemenuBar = () => {
  const pathname = usePathname();
  const [click, setClick] = useState(false);
  const { data: session, status } = useSession();

  // Ensure useEffect is always called and not conditionally skipped
  useEffect(() => {
    document.body.style.overflow = click ? "hidden" : "auto";
  }, [click]);

  // Show loading spinner while session is being fetched
  if (status === "loading") {
    return <Spinner />;
  }

  // If no session, return null or redirect the user
  if (!session) {
    return <p>Please sign in.</p>; // You can also redirect to a login page
  }

  const role = session?.user?.role;
  const email = session?.user?.email;

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div>
      <div className="lg:hidden absolute md:p-10 max-sm:p-6">
        {/* Burger Icon */}
        <div onClick={handleClick}>
          {click ? (
            <AiOutlineClose
              size={30}
              className="text-4xl text-cyan-500 cursor-pointer"
            />
          ) : (
            <SlMenu
              size={30}
              className="text-4xl  text-cyan-500 font-bold cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[320px] h-full bg-gray-900 transition-transform duration-500 ease-in-out z-50 lg:static lg:translate-x-0 ${
          click ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-base-200 px-4 py-3 border-b border-gray-700">
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 hover:text-cyan-500 cursor-pointer border-2 border-cyan-400 p-1 rounded-full"
          >
            <AiOutlineClose className="text-xl lg:text-2xl cursor-pointer" />
          </button>
          <div className="flex flex-col items-center">
            <Image src={logo} alt="logo" width={80} height={100} />
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-cyan-900 text-lg font-bold">
              Journey Trails
            </div>
            <div className="text-xs font-bold -mt-1">
              Let Your Journey With Us!
            </div>
          </div>
        </div>

        {/* Scrollable Menu */}
        <ul className="overflow-y-auto scrollbar-hide p-4 space-y-4 text-xl text-white">
          <div className="flex justify-start font-bold px-2">
            <h3>Main Links</h3>
          </div>
          <nav className="flex-1 mt-4 space-y-2 ">
            <SidebarItem
              icon={<FaUser size={20} />}
              label="Profile"
              href="/dashboard/profile"
              isActive={pathname === "/dashboard/profile"}
            />
            {role === "tourist" && email && (
              <div>
                <SidebarItem
                  icon={<FaHeart size={20} />}
                  label="My Wishlist"
                  href="/dashboard/wishlist"
                  isActive={pathname === "/dashboard/wishlist"}
                />
                <SidebarItem
                  icon={<FaClipboardList size={20} />}
                  label="My Bookings"
                  href="/dashboard/my-bookings"
                  isActive={pathname === "/dashboard/my-bookings"}
                />
              </div>
            )}

            {role === "admin" && email && (
              <div>
                <SidebarItem
                  icon={<FaPlus size={20} />}
                  label="Add Place"
                  href="/dashboard/add-place"
                  isActive={pathname === "/dashboard/add-place"}
                />
                <SidebarItem
                  icon={<FaListAlt size={20} />}
                  label="Destinations"
                  href="/dashboard/destinations"
                  isActive={pathname === "/dashboard/destinations"}
                />
                <SidebarItem
                  icon={<FaUser size={20} />}
                  label="Manage Users"
                  href="/dashboard/manage-users"
                  isActive={pathname === "/dashboard/manage-users"}
                />
                <SidebarItem
                  icon={<FaTicketAlt size={20} />}
                  label="All Bookings"
                  href="/dashboard/all-bookings"
                  isActive={pathname === "/dashboard/all-bookings"}
                />
              </div>
            )}
          </nav>
        </ul>
      </div>

      {/* Overlay */}
      {click && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon, label, href, isActive }) => (
  <Link href={href} passHref>
    <div
      className={`flex items-center p-3 space-x-3 cursor-pointer ${
        isActive
          ? "bg-cyan-600 text-white font-bold border-l-4 border-cyan-400"
          : "hover:bg-cyan-400"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  </Link>
);

export default SidemenuBar;
