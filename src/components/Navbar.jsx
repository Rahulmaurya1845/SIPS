import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `relative font-semibold text-sm md:text-base transition-all duration-300 
    ${
      isActive
        ? "text-blue-900"
        : "text-gray-800 hover:text-blue-900 hover:scale-105"
    }
    after:content-[''] 
    after:absolute 
    after:left-0 
    after:-bottom-1 
    after:h-[2px] 
    after:bg-blue-900 
    after:transition-all 
    after:duration-300 
    after:w-0 
    hover:after:w-6 
    md:hover:after:w-full 
    ${isActive ? "after:w-6 md:after:w-full" : ""}`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 md:px-4">
        <div className="flex items-center justify-start h-24 gap-8"> {/* shifted left */}

          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-3 flex-shrink-0"
          >
            <img
              src={logo}
              alt="LM Educational Academy"
              className="h-16 md:h-20 w-auto transition duration-300 hover:scale-105"
            />
            <div className="flex flex-col">
              <h1 className="text-lg md:text-2xl font-bold text-blue-900 leading-tight">
                Sahodara International Public School
              </h1>
              <p className="text-xs md:text-sm text-gray-600">
                Senior Secondary School, Kakore
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 ml-auto">
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkStyle}>
              About
            </NavLink>
            <NavLink to="/academics" className={navLinkStyle}>
              Academics
            </NavLink>
            <NavLink to="/admissions" className={navLinkStyle}>
              Admissions
            </NavLink>
            <NavLink to="/gallery" className={navLinkStyle}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={navLinkStyle}>
              Contact
            </NavLink>
            <NavLink
              to="/admissions"
              className="bg-orange-500 hover:bg-orange-600 hover:scale-105 text-white px-6 py-2 rounded-full font-semibold shadow-md transition duration-300 whitespace-nowrap"
            >
              Admissions Open
            </NavLink>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden text-2xl text-blue-900 cursor-pointer transition duration-300 hover:scale-110">
            {menuOpen ? (
              <FaTimes onClick={() => setMenuOpen(false)} />
            ) : (
              <FaBars onClick={() => setMenuOpen(true)} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-6 space-y-4">
          <NavLink
            to="/"
            className="block font-semibold text-gray-800 hover:text-blue-900 hover:translate-x-2 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block font-semibold text-gray-800 hover:text-blue-900 hover:translate-x-2 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/academics"
            className="block font-semibold text-gray-800 hover:text-blue-900 hover:translate-x-2 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Academics
          </NavLink>
          <NavLink
            to="/admissions"
            className="block font-semibold text-gray-800 hover:text-blue-900 hover:translate-x-2 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Admissions
          </NavLink>
          <NavLink
            to="/gallery"
            className="block font-semibold text-gray-800 hover:text-blue-900 hover:translate-x-2 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className="block font-semibold text-gray-800 hover:text-blue-900 hover:translate-x-2 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/admissions"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300 whitespace-nowrap"
          >
            Admissions Open
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
