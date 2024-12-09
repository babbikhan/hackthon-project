const SplitBanner = () => {
  return (
    <div className="max-w-screen-xl md:mx-auto flex flex-wrap items-center justify-between md:gap-0 gap-5  py-8 ">
      {/* Left Banner */}
      <div
        className="md:w-[48%] w-full md:h-[478px] h-[350px] bg-cover bg-center relative md:mx-0 mx-4"
        style={{
          backgroundImage: `url('/banner1.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#007481] md:p-12 p-5 flex flex-col items-center md:justify-between justify-center">
          {/* Title and Description */}
          <div>
            <h2 className="text-3xl font-bold text-white md:mx-12 mb-4 md:text-left text-center">
              About Us - Comforty
            </h2>
            <p className="text-white md:mx-12 leading-relaxed md:text-left text-center">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
          </div>

          {/* Button */}
          <button className="mt-4 hover:bg-white bg-[#248993] text-white hover:text-[#248993] py-2 md:mx-12 px-6 md:self-start self-center">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Banner */}
      <div
        className="md:w-[48%] w-full md:h-[478px] h-[350px] bg-cover bg-center md:mx-0 mx-4"
        style={{
          backgroundImage: `url('/ap1.png')`,
        }}
      ></div>
    </div>
  );
};

export default SplitBanner;
