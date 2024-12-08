"use client";
import { FaCreditCard } from "react-icons/fa";
import { FaRegCircleCheck, FaTruckFast } from "react-icons/fa6";
import { GiSprout } from "react-icons/gi";

// This marks the component as a client-side component

const FourSplitBanner = () => {
  // Sample data for banners
  const banners = [
    {
      icon: <FaTruckFast size={25} className="text-[#007580]" />,
      title: "Next day as standard",
      description:
        "Order before 3pm and get your order the next day as standard",
    },
    {
      icon: <FaRegCircleCheck size={25} className="text-[#007580]" />,
      title: "Made by true artisans",
      description:
        "Handmade crafted goods made with real passion and craftsmanship",
    },
    {
      icon: <FaCreditCard size={25} className="text-[#007580]" />,
      title: "Unbeatable prices",
      description:
        "For our materials and quality, you won’t find better prices anywhere",
    },
    {
      icon: <GiSprout size={25} className="text-[#007580]" />,
      title: "Recycled packaging",
      description:
        "We use 100% recycled materials to ensure our footprint is more manageable",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto text-center py-8">
      {/* Section Title */}
      <h2 className="md:text-3xl text-2xl text-[#272343] font-semibold mb-8">
        What makes our Brand Different
      </h2>

      {/* Flexbox for Banners in One Row */}
      <div className="flex flex-wrap items-center md:justify-between justify-center gap-4">
        {banners.map((banner, index) => (
          <div
            key={index}
            className="w-[300px] h-[244px] bg-[#F9F9F9] flex flex-col items-start justify-center p-6"
          >
            {/* Banner Image with width and height 24x24, moved down slightly */}
            <h3 className="mb-3 text-left mx-7">{banner.icon}</h3>

            {/* Title - Left aligned with reduced padding */}
            <h3 className="text-lg text-[#007580] font-inter mb-1 text-left mx-7">
              {banner.title}
            </h3>

            {/* Description - Left aligned with reduced padding */}
            <p
              className="text-sm text-[#007580] text-left mx-7 overflow-hidden whitespace-normal"
              style={{
                WebkitLineClamp: 3,
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
              }}
            >
              {banner.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FourSplitBanner;
