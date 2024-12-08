"use client"; // Mark this file as a client component

import Link from "next/link";
import { usePathname } from "next/navigation"; // Import the correct hook for the App Router
import { FaShoppingCart, FaInfoCircle, FaChevronDown } from "react-icons/fa";

const Header = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <>
      {/* First Header (Top Section) */}
      <header className="bg-[#272343] py-2 md:px-6 px-2">
        <div className="max-w-screen-xl mx-auto flex font-inter justify-between items-center text-white md:text-sm text-xs font-light">
          {/* Left: Free Shipping Message */}
          <div>Free Shipping On All Orders Over $50</div>

          {/* Right: Links with Icons */}
          <div className="flex md:space-x-4 space-x-1.5">
            <div className="flex items-center space-x-1">
              <span>Eng</span>
              <FaChevronDown className="text-white" />
            </div>
            <Link href="/faqs">
              <span>FAQs</span>
            </Link>
            <div className="flex items-center space-x-1">
              <FaInfoCircle className="text-white" />
              <span>Need Help</span>
            </div>
          </div>
        </div>
      </header>

      {/* Second Header (Middle Section) */}
      <header className="bg-[#F0F2F3] py-4 md:px-6 px-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center text-white">
          {/* Left: Logo */}
          <Link href="/">
            <div className="flex items-center">
              <svg
                className="mr-2"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_498_215)">
                  <path
                    d="M39.9938 19.7464C39.9286 18.4433 39.3566 17.2173 38.3999 16.3301C37.4432 15.4429 36.1776 14.9649 34.8732 14.9979C33.5689 15.031 32.3292 15.5727 31.4187 16.5072C30.5082 17.4418 29.9991 18.6952 30 20V28.3333C30 27.8913 29.8244 27.4674 29.5119 27.1548C29.1993 26.8422 28.7754 26.6667 28.3334 26.6667H11.6667C11.2247 26.6667 10.8007 26.8422 10.4882 27.1548C10.1756 27.4674 10 27.8913 10 28.3333V20C9.99996 19.0833 9.74791 18.1843 9.27143 17.4013C8.79495 16.6182 8.11237 15.9812 7.2983 15.5598C6.48422 15.1385 5.56999 14.949 4.65552 15.0122C3.74105 15.0754 2.86154 15.3887 2.11312 15.9179C1.3647 16.4472 0.776167 17.172 0.411857 18.0131C0.0475467 18.8543 -0.0785237 19.7794 0.0474254 20.6873C0.173374 21.5953 0.546496 22.4511 1.12601 23.1614C1.70552 23.8716 2.46912 24.4088 3.33334 24.7144V33.3333C3.33334 33.7753 3.50893 34.1993 3.8215 34.5118C4.13406 34.8244 4.55798 35 5.00001 35H6.66668V38.3333H10V35H30V38.3333H33.3334V35H35C35.4421 35 35.866 34.8244 36.1786 34.5118C36.4911 34.1993 36.6667 33.7753 36.6667 33.3333V24.7144C37.6824 24.3551 38.5549 23.6775 39.1544 22.7823C39.7539 21.8872 40.0483 20.8224 39.9938 19.7464Z"
                    fill="#029FAE"
                  />
                  <path
                    d="M11.667 20V25H28.3337V20C28.3355 18.5224 28.8274 17.0872 29.7321 15.919C30.6369 14.7508 31.9035 13.9157 33.3337 13.5443V9.99996C33.3312 7.79058 32.4524 5.67241 30.8901 4.11014C29.3279 2.54788 27.2097 1.66911 25.0003 1.66663H15.0003C12.7909 1.66911 10.6728 2.54788 9.11051 4.11014C7.54824 5.67241 6.66947 7.79058 6.66699 9.99996V13.5443C8.09713 13.9157 9.36374 14.7508 10.2685 15.919C11.1733 17.0872 11.6651 18.5224 11.667 20ZM23.3337 8.33329C23.6633 8.33329 23.9855 8.43104 24.2596 8.61418C24.5337 8.79731 24.7473 9.05761 24.8735 9.36215C24.9996 9.6667 25.0326 10.0018 24.9683 10.3251C24.904 10.6484 24.7453 10.9454 24.5122 11.1785C24.2791 11.4116 23.9821 11.5703 23.6588 11.6346C23.3355 11.6989 23.0004 11.6659 22.6958 11.5398C22.3913 11.4136 22.131 11.2 21.9479 10.9259C21.7647 10.6518 21.667 10.3296 21.667 9.99996C21.667 9.55793 21.8426 9.13401 22.1551 8.82145C22.4677 8.50889 22.8916 8.33329 23.3337 8.33329ZM23.3337 13.3333C23.6633 13.3333 23.9855 13.431 24.2596 13.6142C24.5337 13.7973 24.7473 14.0576 24.8735 14.3622C24.9996 14.6667 25.0326 15.0018 24.9683 15.3251C24.904 15.6484 24.7453 15.9454 24.5122 16.1785C24.2791 16.4116 23.9821 16.5703 23.6588 16.6346C23.3355 16.6989 23.0004 16.6659 22.6958 16.5398C22.3913 16.4136 22.131 16.2 21.9479 15.9259C21.7647 15.6518 21.667 15.3296 21.667 15C21.667 14.5579 21.8426 14.134 22.1551 13.8214C22.4677 13.5089 22.8916 13.3333 23.3337 13.3333ZM16.667 8.33329C16.9966 8.33329 17.3189 8.43104 17.5929 8.61418C17.867 8.79731 18.0806 9.05761 18.2068 9.36215C18.3329 9.6667 18.3659 10.0018 18.3016 10.3251C18.2373 10.6484 18.0786 10.9454 17.8455 11.1785C17.6124 11.4116 17.3154 11.5703 16.9921 11.6346C16.6688 11.6989 16.3337 11.6659 16.0292 11.5398C15.7246 11.4136 15.4643 11.2 15.2812 10.9259C15.0981 10.6518 15.0003 10.3296 15.0003 9.99996C15.0003 9.55793 15.1759 9.13401 15.4885 8.82145C15.801 8.50889 16.225 8.33329 16.667 8.33329ZM16.667 13.3333C16.9966 13.3333 17.3189 13.431 17.5929 13.6142C17.867 13.7973 18.0806 14.0576 18.2068 14.3622C18.3329 14.6667 18.3659 15.0018 18.3016 15.3251C18.2373 15.6484 18.0786 15.9454 17.8455 16.1785C17.6124 16.4116 17.3154 16.5703 16.9921 16.6346C16.6688 16.6989 16.3337 16.6659 16.0292 16.5398C15.7246 16.4136 15.4643 16.2 15.2812 15.9259C15.0981 15.6518 15.0003 15.3296 15.0003 15C15.0003 14.5579 15.1759 14.134 15.4885 13.8214C15.801 13.5089 16.225 13.3333 16.667 13.3333Z"
                    fill="#029FAE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_498_215">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              {/* <img src="/Logo.png" alt="Logo" className="h-10 mr-2" /> */}
              <span className="text-xl font-inter font-semibold text-[#272343]">
                Comforty
              </span>
            </div>
          </Link>

          {/* Right: Cart Button with Icon and Cart Count */}
          <Link href="/cart" className="group">
            <button className="group-hover:bg-[#007580] bg-white rounded-lg flex items-center justify-center gap-x-2 px-4 py-2">
              <FaShoppingCart className="text-black group-hover:text-white" />
              <div className=" text-[#272343] group-hover:text-white">Cart</div>
              <span className=" bg-[#007580] group-hover:bg-white text-white group-hover:text-[#007580] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
          </Link>
        </div>
      </header>

      {/* Third Header (Bottom Section: Navigation) */}
      <header className="bg-[#ffffff] py-3 px-6">
        <div className="max-w-screen-xl mx-auto flex font-semibold justify-between items-center md:text-sm text-xs whitespace-nowrap">
          {/* Left: Navigation Links */}
          <div className="flex items-center md:justify-start justify-around gap-x-1 md:gap-x-5 w-full">
            <div>
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "text-[#007580]" : "text-[#636270]"
                } hover:text-[#007580] transition`}
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                href="/products"
                className={`${
                  pathname === "/products" ? "text-[#007580]" : "text-[#636270]"
                } hover:text-[#007580] transition`}
              >
                All Products
              </Link>
            </div>
            <div>
              <Link
                href="/product"
                className={`${
                  pathname === "/product" ? "text-[#007580]" : "text-[#636270]"
                } hover:text-[#007580] transition`}
              >
                Product
              </Link>
            </div>
            <div>
              <Link
                href="/contact"
                className={`${
                  pathname === "/contact" ? "text-[#007580]" : "text-[#636270]"
                } hover:text-[#007580] transition`}
              >
                Contact Us
              </Link>
            </div>
            <div>
              <Link
                href="/about"
                className={`${
                  pathname === "/about" ? "text-[#007580]" : "text-[#636270]"
                } hover:text-[#007580] transition`}
              >
                About
              </Link>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="flex items-center  md:block hidden">
            <span>Contact: </span>
            <span className="ml-2 font-semibold">(808) 555-0111</span>
          </div>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;
