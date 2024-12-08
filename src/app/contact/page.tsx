"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import ContactFooter from "../Components/ContactFooter"; // Adjust the path based on your file structure

const Contact = () => {
  return (
    <div>
      {/* Main Contact Section */}
      <div className="py-16 px-4 max-w-screen-xl mx-auto">
        {/* Heading and Paragraph */}
        <div className="text-center mb-12">
          <h1 className="text-[36px] font-bold text-[#272343] mb-4">
            Get In Touch With Us
          </h1>
          <p className="text-[16px] text-[#9F9F9F]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us. <br />
            An Email Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        {/* Contact Information and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 mx-2 ">
          {/* Left Side: Contact Info */}
          <div className="md:space-y-[80px] space-y-5">
            {/* Address */}
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-[#000000]" />
              <div>
                <h3 className="font-semibold text-lg text-[#000000]">
                  Address
                </h3>
                <p className="text-[#000000]">
                  236 5th SE Avenue, New York NY10000,
                  <br /> United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-2xl text-[#000000]" />
              <div>
                <h3 className="font-semibold text-lg text-[#000000]">Phone</h3>
                <p className="text-[#000000]">Mobile: +(84) 546-6789</p>
                <p className="text-[#000000]">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-center space-x-4">
              <FaRegClock className="text-2xl text-[#000000]" />
              <div>
                <h3 className="font-semibold text-lg text-[#000000]">
                  Working Hours
                </h3>
                <p className="text-[#000000]">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-[#000000]">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white md:py-10 py-5 px-8 ">
            <form>
              <div className="space-y-4">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[16px] font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Abc"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border text-[14px] border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#007580]"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[16px] font-medium text-gray-700"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Abc@def.com"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border text-[14px] border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#007580]"
                    required
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[16px] font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="This is optional"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border text-[14px] border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#007580]"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[16px] font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Hi, I’d like to ask about..."
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border text-[14px] border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#007580]"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#029FAE] text-white text-[16px] font-semibold rounded-md hover:bg-[#02a0aedb]"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Footer Section */}
      <ContactFooter />
    </div>
  );
};

export default Contact;
