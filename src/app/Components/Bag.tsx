"use client";

import { FaHeart, FaTrash } from "react-icons/fa";

type BagProps = {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
  size: string;
  quantity: number;
};

const Bag = ({
  imageSrc,
  title,
  description,
  price,
  size,
  quantity,
}: BagProps) => {
  return (
    <div className="w-full mx-2">
      {/* Bag Item Container */}
      <div className="flex items-start justify-between rounded-lg mb-6">
        <div className="flex items-start justify-start">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img
              src={imageSrc} // Dynamic product image path
              alt="Product"
              className="md:w-[150px] w-[100px] md:h-[150px] h-[100px] object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="ml-4 flex-1 md:mb-4 text-[15px]">
            {/* Product Title */}
            <h2 className=" text-[#272343]">{title}</h2>

            {/* Product Description */}
            <p className="text-sm text-[#757575] md:mt-9">{description}</p>

            {/* Size and Quantity */}
            <div className="flex items-center gap-8 mt-1">
              <div className="text-sm text-[#757575]">
                <span className="font-medium">Size:</span> {size}
              </div>
              <div className="text-sm text-[#757575]">
                <span className="font-medium">Quantity:</span> {quantity}
              </div>
            </div>

            {/* Wishlist and Delete Icons (Text removed) */}
            <div className="flex items-center gap-4 md:mt-4 mt-2">
              <button className="flex items-center text-[#757575] hover:text-[#000000] ">
                <FaHeart />
              </button>
              <button className="flex items-center text-[#757575] hover:text-[#000000]">
                <FaTrash />
              </button>
            </div>
          </div>
        </div>

        {/* Product Price */}
        <div className="ml-4 text-[15px]">
          <p className="text-gray-800">{price}</p>
        </div>
      </div>
    </div>
  );
};

const BagPage = () => {
  return (
    <div className="md:w-[50%] md:py-7 p-3">
      <h1 className="text-2xl font-semibold text-left mt-8 mb-4 ">Bag</h1>
      <div className="flex flex-col items-start justify-center">
        {/* First Bag Component */}
        <Bag
          imageSrc="/ac1.png"
          title="Library Stool Chair"
          description="Ashen Slate/Cobalt Bliss"
          price="MRP: $99"
          size="L"
          quantity={1}
        />

        {/* Second Bag Component */}
        <Bag
          imageSrc="/ac2.png"
          title="Library Stool Chair"
          description="Ashen Slate/Cobalt Bliss"
          price="MRP: $99"
          size="Large"
          quantity={2}
        />
      </div>
    </div>
  );
};

export default BagPage;
