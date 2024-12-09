"use client"; // This marks the component as a client-side component

const ThreeSplitBanner = () => {
  // Sample data for banners
  const banners = [
    {
      image: "/ap6.png",
      title: "The Poplar suede sofa",
      price: "$99.00",
    },
    {
      image: "/ap7.png",
      title: "The Dandy chair",
      price: "$99.00",
    },
    {
      image: "/ap8.png",
      title: "The Dandy chair",
      price: "$99.00",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto text-left md:py-10">
      {/* Section Title */}
      <h2 className="md:text-3xl text-2xl text-[#272343] font-semibold mb-9 md:text-left text-center">
        Our Popular Products{" "}
      </h2>

      {/* Flexbox for Banners */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* First Banner with larger size */}
        <div className="md:w-[630px] md:mx-0 mx-4 md:h-[375px] bg-[#ffffff] md:text-left text-center">
          <img
            src={banners[0].image}
            alt={banners[0].title}
            className="w-full h-full object-cover mb-4"
          />
          {/* Title and Price below the banner */}
          <h3 className=" text-[#2A254B] font-inter ">{banners[0].title}</h3>
          <p className=" text-[#2A254B] font-inter ">{banners[0].price}</p>
        </div>

        {/* Second Banner with smaller size */}
        <div className="md:w-[305px] md:mx-0 mx-4 w-full md:h-[375px] bg-[#ffffff] text-center">
          <img
            src={banners[1].image}
            alt={banners[1].title}
            className="w-full h-full object-cover mb-4"
          />
          {/* Title and Price below the banner */}
          <h3 className=" text-[#2A254B] font-inter ">{banners[1].title}</h3>
          <p className=" text-[#2A254B] font-inter ">{banners[1].price}</p>
        </div>

        {/* Third Banner with smaller size */}
        <div className="md:w-[305px] md:mx-0 mx-4 w-full md:h-[375px] bg-[#ffffff] text-center">
          <img
            src={banners[2].image}
            alt={banners[2].title}
            className="w-full h-full object-cover mb-4"
          />
          {/* Title and Price below the banner */}
          <h3 className=" text-[#2A254B] font-inter ">{banners[2].title}</h3>
          <p className=" text-[#2A254B] font-inter ">{banners[2].price}</p>
        </div>
      </div>
    </section>
  );
};

export default ThreeSplitBanner;
