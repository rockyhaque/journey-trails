"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LuHome } from "react-icons/lu";
import { RiServiceLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { TbLocation } from "react-icons/tb";
import { signOut, useSession } from "next-auth/react";
import CustomBtn from "@/components/shared/Button/CustomBtn";
import { MdSpaceDashboard } from "react-icons/md";

const NavLinks = () => {
  const currentPath = usePathname();
  const session = useSession();
  return (
    <div className="hidden md:hidden lg:flex gap-5">
      <div className="flex gap-10 items-center text-slate-600">
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
            currentPath === "/destinations" && "g-card px-2 py-1 font-semibold"
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
        <Link
          className={`${
            currentPath === "/dashboard" && "g-card px-2 py-1 font-semibold"
          } flex items-center gap-1`}
          href="/dashboard"
        >
          <MdSpaceDashboard size={20} /> Dashboard
        </Link>
      </div>
      {/*//* Login &Signup button added here */}
      <div className="login-Signup">
        {!session.data ? (
          <>
            <Link href="login">
              <CustomBtn text="Join Us" />
            </Link>
          </>
        ) : (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  width={50}
                  height={50}
                  alt="Tailwind CSS Navbar component"
                  src={
                    session?.data?.user?.image ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  {session?.data?.user?.name}
                  <span className="badge">Profile</span>
                </a>
              </li>
              <li>
                <button onClick={() => signOut()}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavLinks;
