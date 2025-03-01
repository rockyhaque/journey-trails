import NavLinks from "@/components/shared/Navbar/NavLinks";
import NavTitle from "@/components/shared/Navbar/NavTitle";

const Navbar = () => {
  return (
    <nav className="bg-background sticky backdrop-blur-lg bg-opacity-75 py-3 top-0 z-50 shadow-bottom-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Nav Title */}
          <NavTitle />

          {/* Navigation Links */}
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
