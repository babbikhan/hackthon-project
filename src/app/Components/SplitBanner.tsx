"use client"; // This marks the component as a client-side component

const SplitBanner = () => {
  return (
    <div className="max-w-screen-xl md:mx-auto flex items-center justify-center gap-4 py-8 mx-2 ">
      {/* Left Banner */}
      <div
        className="w-[672px] h-[478px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url('/banner1.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#007481] md:p-12 p-5 flex flex-col items-center justify-between">
          {/* Title and Description */}
          <div>
            <h2 className="text-3xl font-bold text-white md:mx-12 mb-4">
              About Us - Comforty
            </h2>
            <p className="text-white md:mx-12 leading-relaxed">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
          </div>

          {/* Button */}
          <button className="mt-4 bg-[#248993] text-white py-2 md:mx-12 px-6 md:self-start self-center">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Banner */}
      <div
        className="w-[672px] h-[478px] bg-cover bg-center md:block hidden"
        style={{
          backgroundImage: `url('/ap1.png')`,
        }}
      ></div>
    </div>
  );
};

export default SplitBanner;
