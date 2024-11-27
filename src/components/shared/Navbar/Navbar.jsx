import React from "react";
import NavLinks from "@/components/shared/Navbar/NavLinks";
import NavTitle from "@/components/shared/Navbar/NavTitle";

const Navbar = () => {
  return (
    <nav className="bg-background border-b mb-5 custom-glass-2 py-3 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between a">
          <NavTitle></NavTitle>
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
