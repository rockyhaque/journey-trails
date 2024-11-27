'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { LuHome } from "react-icons/lu";
const NavLinks = () => {
    const currentPath = usePathname();
    return (
        <div className="hidden lg:block md:hidden">
        <div className="flex gap-10 items-center text-slate-600">
          <Link
            className={`${
              currentPath === "/" && "g-card px-2 py-1 font-semibold"
            } flex items-center gap-1`}
            href="/"
          >
            <LuHome size={20} /> Home
          </Link>
          

        </div>
        
      </div>
    );
};

export default NavLinks;