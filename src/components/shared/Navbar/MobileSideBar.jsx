import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { AiOutlineClose } from "react-icons/ai";
import { SlMenu } from "react-icons/sl";
import Image from "next/image";
import logo from "../../../../public/assets/logo/logo.png";
import { LuHome } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbListDetails, TbLocation } from "react-icons/tb";
import { RiServiceLine } from "react-icons/ri";
import CustomBtn from "@/components/shared/Button/CustomBtn";
import { signOut, useSession } from "next-auth/react";
const MobileSideBar = () => {
  const session = useSession();
  const currentPath = usePathname();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => {
    setClick(false);
  };
  return (
    <div>
      <div className="">
        <div className="  gap-5 lg:gap-10 justify-center items-center">
          {/* Burger Icon */}
          <div onClick={handleClick}>
            {click ? (
              <AiOutlineClose
                size={20}
                className="text-xl text-blue-500 lg:text-2xl cursor-pointer"
              />
            ) : (
              <SlMenu
                size={20}
                className="text-xl lg:text-2xl text-blue-500 font-bold cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* Menu Items */}
        <div
          className={`fixed top-0 left-0 w-[320px] h-full bg-base-200 transition-transform duration-500 ease-in-out z-50 ${
            click ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Fixed Header in Burger Menu */}
          <div className="sticky top-0 bg-base-200 px-4 py-3 md:py-4 border-b border-gray-700">
            {/* Close Menu Button */}
            <a
              onClick={closeMenu}
              className="absolute top-4 right-4 hover:text-blue-500 cursor-pointer border-2 border-blue-400 p-1 rounded-full"
            >
              <LiaTimesSolid className="text-xl lg:text-2xl cursor-pointer" />
            </a>

            {/* Centered Logo and Title */}
            <div className="flex flex-col items-center justify-center text-center w-full">
              <Image src={logo} alt="logo" width={80} height={100} />
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-900">
                <div className="text-lg font-bold">Journey Trails</div>
                <div className="text-xs  -mt-1 font-bold ">
                  Let Your Journey With Us!
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Content with Hidden Scrollbar */}
          <ul
            className="overflow-y-scroll p-4 space-y-4 text-center text-3xl "
            style={{
              maxHeight: "calc(100vh - 64px)",
              scrollbarWidth: "none" /* For Firefox */,
              msOverflowStyle: "none" /* For Internet Explorer and Edge */,
            }}
          >
            {/* Hide Scrollbar for WebKit Browsers */}
            <style>{` ul::-webkit-scrollbar { display: none; } `}</style>

            {/* links  */}
            <div className="flex justify-start text-xl font-bold px-2">
              <h3>Main Links </h3>
            </div>
            <Link
              className={`${
                currentPath === "/" && "g-card px-2 py-1 font-semibold"
              } flex items-center gap-1`}
              href="/"
            >
              <LuHome size={20} /> Home
            </Link>
            <Link
              className={`${
                currentPath === "/destinations" &&
                "g-card px-2 py-1 font-semibold"
              } flex items-center gap-1`}
              href="/destinations"
            >
              <TbLocation size={20} /> Destinations
            </Link>
            <Link
              className={`${
                currentPath === "/about" && "g-card px-2 py-1 font-semibold"
              } flex items-center gap-1`}
              href="/about"
            >
              <TbListDetails size={20} /> About
            </Link>
            <Link
              className={`${
                currentPath === "/contact" && "g-card px-2 py-1 font-semibold"
              } flex items-center gap-1`}
              href="/contact"
            >
              <RiServiceLine size={20} /> Contact
            </Link>

            <div>
              {!session.data ? (
                <>
                  <Link href="login">
                    <CustomBtn text="SignIn / SignUp" />
                  </Link>
                </>
              ) : (
                <button className="btn bg-rose-500" onClick={() => signOut()}>
                  Logout
                </button>
              )}
            </div>
          </ul>
        </div>

        {/* Background Shadow (Overlay) */}
        {click && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500"
            onClick={closeMenu} // Close menu when clicking on the overlay
          ></div>
        )}
      </div>
    </div>
  );
};

export default MobileSideBar;
