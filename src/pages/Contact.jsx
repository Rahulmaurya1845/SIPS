import {
  Phone,
  Mail,
  MapPin,
  Share2,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-gray-300 relative overflow-hidden">
      {/* Added subtle animated background elements for more design */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Top Heading - Added vibrant gradient and shadow for more color and design */}
        <h1 className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 mb-6 drop-shadow-lg animate-fade-in">
          Contact Us
        </h1>
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 drop-shadow-md">
          Need Help?
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mx-auto mb-6 rounded-full shadow-lg"></div>

        <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100 max-w-3xl mx-auto mb-20 text-lg leading-relaxed drop-shadow-sm">
          If you have any questions or need additional information, feel free
          to reach out to us using the details below or the contact form.
        </p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT SIDE CARDS - Adjusted for dark background */}
          <div className="grid sm:grid-cols-2 gap-10">
            {/* Call Us - Icon centered in card */}
            <div className="group bg-gray-800/80 p-10 rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 hover:text-white flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 rounded-full mb-6 transition-all duration-300 group-hover:bg-white group-hover:text-blue-600 group-hover:scale-110">
                <Phone className="text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Call Us On</h3>
              <p className="mb-3 text-lg text-gray-200"> 097923 47399</p>
              <p className="text-sm opacity-80 text-gray-400">
                Monday to Saturday, 9:00 AM – 5:00 PM
              </p>
            </div>

            {/* Email - Icon centered in card */}
            <div className="group bg-gray-800/80 p-10 rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600 hover:text-white flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200 text-green-600 rounded-full mb-6 transition-all duration-300 group-hover:bg-white group-hover:text-green-600 group-hover:scale-110">
                <Mail className="text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Email Us</h3>
              <p className="mb-3 text-lg text-gray-200">sips@gmail.com</p>
              <p className="text-sm opacity-80 text-gray-400">
                We usually respond within 24 hours.
              </p>
            </div>

            {/* Location - Icon centered in card */}
            <div className="group bg-gray-800/80 p-10 rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-gradient-to-br hover:from-pink-500 hover:to-pink-600 hover:text-white flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200 text-pink-600 rounded-full mb-6 transition-all duration-300 group-hover:bg-white group-hover:text-pink-600 group-hover:scale-110">
                <MapPin className="text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Our Location</h3>
              <p className="text-sm opacity-80 leading-relaxed text-gray-400">
                 RXP2+45C, Parsauna, Uttar Pradesh 274309
              </p>
            </div>

            {/* Social - Icon centered in card, social icons in little circles */}
            <div className="group bg-gray-800/80 p-10 rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-500 hover:text-white flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-600 rounded-full mb-6 transition-all duration-300 group-hover:bg-white group-hover:text-yellow-600 group-hover:scale-110">
                <Share2 className="text-3xl" />
              </div>
              <p className="text-sm mb-8 opacity-80 leading-relaxed text-gray-400">
                Stay connected with us on social media.
              </p>

              {/* Social icons in little circles */}
              <div className="flex justify-center space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full transition-all duration-300 hover:scale-125 hover:bg-blue-600 hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="text-lg" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-pink-100 text-pink-600 rounded-full transition-all duration-300 hover:scale-125 hover:bg-pink-600 hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="text-lg" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-red-100 text-red-600 rounded-full transition-all duration-300 hover:scale-125 hover:bg-red-600 hover:text-white"
                  aria-label="YouTube"
                >
                  <Youtube className="text-lg" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-400 rounded-full transition-all duration-300 hover:scale-125 hover:bg-blue-400 hover:text-white"
                  aria-label="Twitter"
                >
                  <Twitter className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM - Adjusted for dark background */}
          <div className="bg-gray-800/80 p-12 rounded-3xl shadow-2xl border border-gray-700 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 to-red-100/10 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-semibold mb-10 text-white">
                Send Us a Message
              </h3>

              <form className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      required
                      className="w-full p-5 border-2 border-gray-600 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500 transition-all duration-300 bg-gray-700 text-white placeholder-gray-400 shadow-sm"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      required
                      className="w-full p-5 border-2 border-gray-600 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500 transition-all duration-300 bg-gray-700 text-white placeholder-gray-400 shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="Enter Your Mobile"
                      required
                      pattern="[0-9]{10}"
                      className="w-full p-5 border-2 border-gray-600 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500 transition-all duration-300 bg-gray-700 text-white placeholder-gray-400 shadow-sm"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter Your Address"
                      className="w-full p-5 border-2 border-gray-600 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500 transition-all duration-300 bg-gray-700 text-white placeholder-gray-400 shadow-sm"
                    />
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    rows="6"
                    placeholder="Enter Your Message"
                    required
                    className="w-full p-5 border-2 border-gray-600 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500 transition-all duration-300 bg-gray-700 text-white placeholder-gray-400 shadow-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-5 rounded-2xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10">Submit Now →</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;