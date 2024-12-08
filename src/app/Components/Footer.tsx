"use client"; // This marks the component as a client-side component

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white pt-10 pb-3">
      {/* Footer Content */}
      <div className="max-w-screen-xl mx-auto px-6 border-t border-gray-300 mt-2 pt-5 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-2 mb-4">
            <img src="/Logo.png" alt="Comforty Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold text-[#272343]">
              Comforty
            </span>
          </div>
          <p className="text-sm text-center text-gray-500 md:pr-8">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          {/* Social Media Icons */}
          <div className="flex items-center justify-center space-x-4 mt-4">
            <div className="group">
              <FaFacebookF
                className="text-[#626370] cursor-pointer group-hover:text-[#007580] border border-white group-hover:border-[#007580] rounded-full p-1.5 transition-transform duration-300"
                size={32}
              />
            </div>
            <div className="group">
              <FaTwitter
                className="text-[#626370] cursor-pointer group-hover:text-[#007580] border border-white group-hover:border-[#007580] rounded-full p-1.5 transition-transform duration-300"
                size={32}
              />
            </div>
            <div className="group">
              <FaInstagram
                className="text-[#626370] cursor-pointer group-hover:text-[#007580] border border-white group-hover:border-[#007580] rounded-full p-1.5 transition-transform duration-300"
                size={32}
              />
            </div>
            <div className="group">
              <FaPinterestP
                className=" text-[#626370] cursor-pointer group-hover:text-[#007580] border border-white group-hover:border-[#007580] rounded-full p-1.5 transition-transform duration-300"
                size={32}
              />
            </div>
          </div>
        </div>

        {/* Category Section */}

        <div className="flex flex-col items-center justify-center">
          <h5 className="text-lg font-semibold text-[#272343] mb-4">
            Category
          </h5>
          <ul className="space-y-2 text-center">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-[#007580] hover:underline"
              >
                Sofa
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-[#007580] hover:underline"
              >
                Armchair
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-[#007580] hover:underline"
              >
                Wing Chair
              </a>
            </li>
            <li>
              <a href="#" className="text-[#007580] hover:underline">
                Desk Chair
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-[#007580] hover:underline"
              >
                Wooden Chair
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-[#007580] hover:underline"
              >
                Park Bench
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="flex flex-col items-center justify-center">
          <h5 className="text-lg font-semibold text-[#272343] mb-4">Support</h5>
          <ul className="space-y-2 text-center">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-[#007580] hover:underline"
              >
                Help & Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-[#007580] hover:underline"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-[#007580] hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-[#007580] hover:underline"
              >
                Help
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col items-center justify-center">
          <h5 className="text-lg font-semibold text-[#272343] mb-4">
            Newsletter
          </h5>
          <div className="flex items-center mb-4 space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
            />
            <button className="bg-[#007580] text-white py-2 px-4 rounded-md hover:bg-[#005f63] transition-all">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
        </div>
      </div>

      {/* Payment Method Logos */}
      <div className="max-w-screen-xl mx-auto px-6 flex flex-wrap items-center md:justify-between justify-center mt-8 border-t border-gray-300 pt-2">
        <div className="text-sm text-gray-500">
          © 2021 - Blogy - Designed & Developed by Sultan Khan
        </div>
        <div className="space-x-4">
          <img
            src="/payment.png"
            alt="Payment"
            className="h-6 inline grayscale"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
