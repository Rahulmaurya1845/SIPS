// import { Link } from "react-router-dom";
// import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
// import logo from "../assets/images/logo.png";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-b from-[#0b132b] to-[#020617] text-gray-300">
      
//       {/* CTA Section */}
//       <div className="text-center py-20 px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-white">
//           Ready to start your journey?
//         </h2>

//         <p className="mt-4 max-w-2xl mx-auto">
//           Join the Sahodara International<br />Public Schoolfamily and give your child the best
//           foundation for their future.
//         </p>

//         <div className="mt-8 flex justify-center gap-6 flex-wrap">
          
//           <Link
//             to="/admissions"
//             className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition"
//           >
//             Apply Now
//           </Link>

//           <a
//             href="tel:08859431431"
//             className="border border-gray-500 px-8 py-3 rounded-full text-white hover:bg-white hover:text-black transition"
//           >
//             Call 08859431431
//           </a>

//         </div>
//       </div>

//       {/* Footer Main */}
//       <div className="border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

//           {/* About */}
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               <img src={logo} alt="School Logo" className="h-12" />
//               <h3 className="font-bold text-white">
//                 Sahodara International<br />Public School
//               </h3>
//             </div>

//             <p className="text-sm">
//               Empowering students with knowledge, values, and skills for a
//               bright future. CBSE Affiliated Senior Secondary School.
//             </p>

//             <div className="flex gap-4 mt-4 text-white">
//               <FaFacebookF className="cursor-pointer hover:text-orange-400 transition" />
//               <FaInstagram className="cursor-pointer hover:text-orange-400 transition" />
//               <FaYoutube className="cursor-pointer hover:text-orange-400 transition" />
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">

//               <li>
//                 <Link to="/" className="hover:text-white transition">
//                   Home
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/about" className="hover:text-white transition">
//                   About Us
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/admissions" className="hover:text-white transition">
//                   Admissions
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/gallery" className="hover:text-white transition">
//                   Gallery
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/contact" className="hover:text-white transition">
//                   Contact
//                 </Link>
//               </li>

//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Contact Us</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 Sikandrabad Road, Near Shivala Mandir, Kakore,
//                 Bulandshahr (U.P.)
//               </li>
//               <li>08859431431, 08859831831</li>
//               <li>l.m.e.a.kakore@gmail.com</li>
//               <li>Mon - Sat: 08:30 AM - 03:00 PM</li>
//             </ul>
//           </div>

//           {/* CBSE Info */}
//           {/* <div className="bg-white/5 rounded-xl p-6 text-sm">
//             <h4 className="text-white font-semibold mb-4">
//               CBSE Affiliated
//             </h4>

//             <p className="flex justify-between">
//               <span>Affiliation No.</span>
//               <span className="text-white">2133750</span>
//             </p>

//             <p className="flex justify-between mt-2">
//               <span>School Code</span>
//               <span className="text-white">61447</span>
//             </p>

//             <div className="mt-4">
//               <h5 className="text-white font-semibold mb-2">
//                 Streams Offered
//               </h5>

//               <div className="flex gap-2 flex-wrap">
//                 <span className="px-3 py-1 bg-white/10 rounded-full">
//                   Science
//                 </span>
//                 <span className="px-3 py-1 bg-white/10 rounded-full">
//                   Commerce
//                 </span>
//                 <span className="px-3 py-1 bg-white/10 rounded-full">
//                   Arts
//                 </span>
//               </div>
//             </div>
//           </div> */}

//         </div>
//       </div>

//       {/* Bottom Line */}
//       <div className="border-t border-white/10 text-center py-6 text-sm">
//         © {new Date().getFullYear()} L.M. Educational Academy. All Rights Reserved.
//       </div>

//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  House,
  User,
  ClipboardList,
  Image,
  Send,
  ExternalLink,
  ArrowRight
} from "lucide-react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#0b132b] to-[#020617] text-gray-300 font-sans relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px]"></div>
      </div>

      {/* CTA Section */}
      <div className="border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to start your journey?
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Join the Sahodara International Public School family and give your child the best foundation for their future.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/admissions"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-orange-500/25 hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Apply Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:08859431431"
              className="border border-gray-600 hover:border-white px-8 py-3 rounded-full text-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* About Section with Animated Socials */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="School Logo" className="h-12" />
              <h3 className="font-bold text-white text-lg">
                Sahodara International<br />Public School
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-gray-400">
              Empowering students with knowledge, values, and skills for a bright future. CBSE Affiliated Senior Secondary School committed to academic excellence.
            </p>

            {/* Animated Social Icons */}
            <div className="flex gap-4 mt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-full hover:bg-[#1877F2] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[#1877F2]/20 group"
              >
                <Facebook size={22} strokeWidth={1.5} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg border border-white/10 group"
              >
                <Twitter size={22} strokeWidth={1.5} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-full hover:bg-[#E1306C] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[#E1306C]/20 group"
              >
                <Instagram size={22} strokeWidth={1.5} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-full hover:bg-[#FF0000] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[#FF0000]/20 group"
              >
                <Youtube size={22} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links with Icons */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
              Quick Links <span className="w-8 h-0.5 bg-orange-500"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="group flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                  <div className="bg-white/5 p-2 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <House size={16} />
                  </div>
                  <span className="font-medium">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="group flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                  <div className="bg-white/5 p-2 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <User size={16} />
                  </div>
                  <span className="font-medium">About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="group flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                  <div className="bg-white/5 p-2 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <ClipboardList size={16} />
                  </div>
                  <span className="font-medium">Admissions</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="group flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                  <div className="bg-white/5 p-2 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <Image size={16} />
                  </div>
                  <span className="font-medium">Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="group flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                  <div className="bg-white/5 p-2 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <Send size={16} />
                  </div>
                  <span className="font-medium">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
              Get in Touch <span className="w-8 h-0.5 bg-orange-500"></span>
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-4 group">
                <div className="bg-white/5 p-2 rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="leading-relaxed">
                 RXP2+45C, Parsauna, Uttar Pradesh 274309
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-white/5 p-2 rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <a href="tel:08859431431" className="hover:text-white transition">097923 47399</a>
                  {/* <a href="tel:08859831831" className="hover:text-white transition">08859831831</a> */}
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-white/5 p-2 rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                  <Mail size={18} />
                </div>
                <a href="mailto:sips@gmail.com" className="hover:text-white transition">
                  sips@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-white/5 p-2 rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                  <Clock size={18} />
                </div>
                <span>Mon - Sat: 08:30 AM - 03:00 PM</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/10 bg-black/20 py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© {currentYear}Sahodara International
Public School . All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;