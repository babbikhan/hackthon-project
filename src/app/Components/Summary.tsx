"use client";

const Summary = () => {
  return (
    <div className="w-[405px] p-6 md:mt-10 mt-5 self-start">
      {/* Summary Title */}
      <h3 className="text-xl font-semibold text-[#272343] mb-4">Summary</h3>

      {/* Subtotal */}
      <div className="flex justify-between items-center mb-4 text-[15px]">
        <span className="text-gray-700">Subtotal</span>
        <span className="text-gray-900">$198.00</span>
      </div>

      {/* Estimated Delivery & Handling */}
      <div className="flex justify-between items-center mb-4 text-[15px]">
        <span className="text-gray-700">Estimated Delivery & Handling</span>
        <span className="text-gray-900">Free</span>
      </div>

      {/* Separator */}
      <div className="border-t border-gray-300 my-4"></div>

      {/* Total */}
      <div className="flex justify-between items-center mb-4 text-[14px]">
        <span className=" text-gray-900">Total</span>
        <span className=" text-gray-900">$198.00</span>
      </div>

      {/* Separator */}
      <div className="border-t border-gray-300 my-4"></div>

      {/* Checkout Button */}
      <button className="w-full bg-[#029FAE] text-white py-3 rounded-full text-[15px] hover:bg-[#02a0aedb]">
        Member Checkout
      </button>
    </div>
  );
};

export default Summary;
