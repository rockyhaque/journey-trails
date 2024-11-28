"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LuHome } from "react-icons/lu";
import { signOut, useSession } from "next-auth/react";

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
            currentPath === "/about" && "g-card px-2 py-1 font-semibold"
          } flex items-center gap-1`}
          href="/about"
        >
          <LuHome size={20} /> About
        </Link>
        <Link
          className={`${
            currentPath === "/contact" && "g-card px-2 py-1 font-semibold"
          } flex items-center gap-1`}
          href="/contact"
        >
          <LuHome size={20} /> Contact
        </Link>
      </div>
      {/*//* Login &Signup button added here */}
      <div className="login-Signup">
        {!session.data ? (
          <>
            <Link href="login">
              <button className="px-2 py-2 text-black bg-primary rounded-lg hover:bg-blue-600 shadow-lg transition-all duration-300">
                Login / Signup
              </button>
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
