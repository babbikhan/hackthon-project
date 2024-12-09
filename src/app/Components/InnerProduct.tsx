import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // Importing an icon from react-icons

interface InnerProductProps {
  imageUrl: string;
  title: string;
  price: string;
  description: string;
}

const InnerProduct: React.FC<InnerProductProps> = ({
  imageUrl,
  title,
  price,
  description,
}) => {
  return (
    <div className="flex flex-wrap  items-center justify-center max-w-screen-xl mx-auto my-2">
      {/* Left Side: Product Image */}
      <div className="flex-shrink-0 md:w-1/2">
        <img
          src="/pi1.png"
          alt={title}
          className="md:w-[550px] w-[350px] md:h-[500px] object-cover rounded-lg"
        />
      </div>

      {/* Right Side: Product Info */}
      <div className="flex flex-col justify-between md:w-1/2 w-full md:mr-0 mr-9 md:ml-0 ml-8 md:mt-0 mt-2">
        {/* Product Title */}
        <h2 className="md:text-[60px] text-2xl font-bold text-gray-800">
          {title}
        </h2>
        {/* Price */}
        <div className="flex items-center md:mt-9 mt-3">
          <div className="bg-[#029FAE] text-white md:text-xl text-sm px-6 py-2 rounded-full">
            {price}
          </div>
        </div>
        {/* Separator */}
        <hr className="border-gray-300 md:py-6 py-2 md:mt-8 mt-5 w-full" />{" "}
        {/* Reduced margin above separator */}
        {/* Product Description */}
        <p className="text-gray-600 md:text-lg text-sm leading-relaxed md:mb-[20px] md:mx-0 mx-2">
          {" "}
          {/* Reduced margin below description */}
          {description}
        </p>
        {/* Add to Cart Button */}
        <div className="flex items-center justify-start md:w-fit w-full md:ml-0 ml-4">
          <Link href={"/cart"} className="md:w-fit w-full">
            <button className="flex items-center md:justify-start justify-center -ml-4 md:w-[170px] w-full bg-[#029FAE] border border-[#029FAE] text-white hover:text-[#029FAE] py-4 px-6 rounded-xl hover:bg-white transition duration-300 md:my-12 my-5">
              <FaShoppingCart className="mr-3" />
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InnerProduct;
