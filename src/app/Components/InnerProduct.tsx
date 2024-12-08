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
    <div className="flex flex-wrap  items-center justify-center max-w-screen-xl mx-auto">
      {/* Left Side: Product Image */}
      <div className="flex-shrink-0 md:w-1/2">
        <img
          src="/pi1.png"
          alt={title}
          className="md:w-[550px] w-[350px] md:h-[500px] object-cover rounded-lg"
        />
      </div>

      {/* Right Side: Product Info */}
      <div className="flex flex-col justify-between md:w-1/2 w-full md:ml-0 ml-8 md:mt-0 mt-2">
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
        <hr className="border-gray-300 md:py-6 py-2 mt-8 w-full" />{" "}
        {/* Reduced margin above separator */}
        {/* Product Description */}
        <p className="text-gray-600 md:text-lg text-sm leading-relaxed mb-[20px]">
          {" "}
          {/* Reduced margin below description */}
          {description}
        </p>
        {/* Add to Cart Button */}
        <div className="flex items-center md:justify-start justify-center">
          <button className="flex items-center -ml-4 w-[170px] bg-[#029FAE] text-white py-4 px-6 rounded-xl hover:bg-gray-900 transition duration-300 md:my-12 my-5">
            <FaShoppingCart className="mr-3" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default InnerProduct;
