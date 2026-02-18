import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `relative font-semibold text-sm md:text-lg lg:text-xl transition-all duration-300 
    ${
      isActive
        ? "text-white bg-indigo-600/20 px-3 py-1 rounded-full"
        : "text-gray-200 hover:text-orange-400 hover:scale-105"
    }
    after:content-[''] 
    after:absolute 
    after:left-0 
    after:-bottom-1 
    after:h-[2px] 
    after:bg-gradient-to-r from-orange-400 to-yellow-500 
    after:transition-all 
    after:duration-300 
    after:w-0 
    hover:after:w-6 
    md:hover:after:w-full 
    ${isActive ? "after:w-6 md:after:w-full" : ""}`;

  return (
    <header className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 shadow-2xl sticky top-0 z-50 backdrop-blur-md bg-opacity-95 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-22 lg:h-26 gap-2 md:gap-3 lg:gap-6">
          {/* Logo Section - Responsive for Mobile, Tablet, Laptop, Desktop */}
          <Link
            to="/"
            className="flex items-center gap-1 md:gap-2 lg:gap-3 flex-shrink-0 min-w-0 group"
          >
            <img
              src={logo}
              alt="Sahodara International Public School"
              className="h-10 md:h-12 lg:h-14 w-auto object-contain flex-shrink-0 drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
            />
            <div className="flex flex-col min-w-0">
              {/* School Name - Responsive in Two Lines */}
              <h1 className="text-sm md:text-lg lg:text-xl font-extrabold leading-tight tracking-wide 
              text-white drop-shadow-lg group-hover:text-yellow-200 transition-colors duration-300">
                Sahodara International<br />Public School
              </h1>
            </div>
          </Link>

          {/* Desktop Menu - Responsive */}
          <nav className="hidden md:flex items-center gap-3 md:gap-4 lg:gap-5">
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
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 hover:scale-105 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap text-xs lg:text-sm border border-orange-400/50"
            >
              Admissions Open
            </NavLink>
          </nav>

          {/* Mobile Hamburger - Fixed */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-white cursor-pointer transition-all duration-300 hover:scale-110 hover:text-orange-400 p-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown - Premium Styled */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-900 to-indigo-900 shadow-2xl px-4 py-6 space-y-4 border-t border-indigo-700/50">
          <NavLink
            to="/"
            className="block font-semibold text-gray-200 hover:text-orange-400 hover:translate-x-3 hover:bg-indigo-800/30 px-4 py-2 rounded-lg transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block font-semibold text-gray-200 hover:text-orange-400 hover:translate-x-3 hover:bg-indigo-800/30 px-4 py-2 rounded-lg transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/academics"
            className="block font-semibold text-gray-200 hover:text-orange-400 hover:translate-x-3 hover:bg-indigo-800/30 px-4 py-2 rounded-lg transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Academics
          </NavLink>
          <NavLink
            to="/admissions"
            className="block font-semibold text-gray-200 hover:text-orange-400 hover:translate-x-3 hover:bg-indigo-800/30 px-4 py-2 rounded-lg transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Admissions
          </NavLink>
          <NavLink
            to="/gallery"
            className="block font-semibold text-gray-200 hover:text-orange-400 hover:translate-x-3 hover:bg-indigo-800/30 px-4 py-2 rounded-lg transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className="block font-semibold text-gray-200 hover:text-orange-400 hover:translate-x-3 hover:bg-indigo-800/30 px-4 py-2 rounded-lg transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          <NavLink
            to="/admissions"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap text-sm border border-orange-400/50"
          >
            Admissions Open
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;