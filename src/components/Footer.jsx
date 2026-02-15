import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0b132b] to-[#020617] text-gray-300">
      
      {/* CTA Section */}
      <div className="text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Ready to start your journey?
        </h2>

        <p className="mt-4 max-w-2xl mx-auto">
          Join the L.M. Educational Academy family and give your child the best
          foundation for their future.
        </p>

        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          
          <Link
            to="/admissions"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Apply Now
          </Link>

          <a
            href="tel:08859431431"
            className="border border-gray-500 px-8 py-3 rounded-full text-white hover:bg-white hover:text-black transition"
          >
            Call 08859431431
          </a>

        </div>
      </div>

      {/* Footer Main */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="School Logo" className="h-12" />
              <h3 className="font-bold text-white">
                L.M. Educational Academy
              </h3>
            </div>

            <p className="text-sm">
              Empowering students with knowledge, values, and skills for a
              bright future. CBSE Affiliated Senior Secondary School.
            </p>

            <div className="flex gap-4 mt-4 text-white">
              <FaFacebookF className="cursor-pointer hover:text-orange-400 transition" />
              <FaInstagram className="cursor-pointer hover:text-orange-400 transition" />
              <FaYoutube className="cursor-pointer hover:text-orange-400 transition" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">

              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/admissions" className="hover:text-white transition">
                  Admissions
                </Link>
              </li>

              <li>
                <Link to="/gallery" className="hover:text-white transition">
                  Gallery
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                Sikandrabad Road, Near Shivala Mandir, Kakore,
                Bulandshahr (U.P.)
              </li>
              <li>08859431431, 08859831831</li>
              <li>l.m.e.a.kakore@gmail.com</li>
              <li>Mon - Sat: 08:30 AM - 03:00 PM</li>
            </ul>
          </div>

          {/* CBSE Info */}
          <div className="bg-white/5 rounded-xl p-6 text-sm">
            <h4 className="text-white font-semibold mb-4">
              CBSE Affiliated
            </h4>

            <p className="flex justify-between">
              <span>Affiliation No.</span>
              <span className="text-white">2133750</span>
            </p>

            <p className="flex justify-between mt-2">
              <span>School Code</span>
              <span className="text-white">61447</span>
            </p>

            <div className="mt-4">
              <h5 className="text-white font-semibold mb-2">
                Streams Offered
              </h5>

              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/10 rounded-full">
                  Science
                </span>
                <span className="px-3 py-1 bg-white/10 rounded-full">
                  Commerce
                </span>
                <span className="px-3 py-1 bg-white/10 rounded-full">
                  Arts
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/10 text-center py-6 text-sm">
        © {new Date().getFullYear()} L.M. Educational Academy. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
