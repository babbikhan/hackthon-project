"use client";

const ContactFooter = () => {
  return (
    <div className=" bg-gray-200 py-10 max-w-screen-xl mx-auto">
      <div className="flex flex-wrap items-center md:justify-around justify-center gap-4 md:mx-5 ">
        {/* Section 1 */}
        <div className="flex items-start space-x-4">
          <img
            src="/trophy.png" // Replace with actual icon path
            alt="Address Icon"
            className="w-10 h-10"
          />
          <div>
            <h3 className="text-lg font-semibold text-[#272343]">
              High Quality
            </h3>
            <p className="text-sm text-gray-600">Crafted from top materials </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex items-start space-x-4 ">
          <img
            src="/guarantee.png" // Replace with actual icon path
            alt="Phone Icon"
            className="w-10 h-10"
          />
          <div>
            <h3 className="text-lg font-semibold text-[#272343]">
              Warranty Proteciton
            </h3>
            <p className="text-sm text-gray-600">Over 2 Years</p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex items-start space-x-4">
          <img
            src="/csr.png" // Replace with actual icon path
            alt="Email Icon"
            className="w-10 h-10"
          />
          <div>
            <h3 className="text-lg font-semibold text-[#272343]">
              24/7 Support
            </h3>
            <p className="text-sm text-gray-600">Dedicated Support always</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
