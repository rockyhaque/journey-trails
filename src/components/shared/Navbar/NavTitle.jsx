"use client";

import { usePathname } from "next/navigation";
import MobileSideBar from "@/components/shared/Navbar/MobileSideBar";
import Logo from "@/components/ui/Logo";

const NavTitle = () => {
  const currentPath = usePathname();
  return (
    <div className="flex items-center gap-5">
      <div className="flex gap-2 items-center">
        <div className="lg:hidden  block">
          <MobileSideBar />
        </div>

        <Logo />
      </div>
    </div>
  );
};

export default NavTitle;
