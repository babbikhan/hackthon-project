const FiveBanner = () => {
  return (
    <section className="max-w-screen-xl mx-auto my-16">
      <div className="flex flex-wrap items-center justify-center">
        {/* left side text */}
        <p className="md:rotate-180 rotate-0 whitespace-nowrap  md:[writing-mode:vertical-lr] md:font-normal font-semibold md:text-[34px] text-xl uppercase leading-[39.84px] text-center">
          Explore new and popular styles
        </p>
        {/* left side banner  */}
        <div className="flex flex-wrap items-center justify-center gap-5 ml-2">
          <img
            src="/five1.png"
            className="md:w-[610px] w-[380px] md:h-[640px] h-[400px]"
          />
          {/* center 2 banner  */}
          <div className="flex flex-row md:flex-col items-center justify-center gap-5">
            <img
              src="/five2.png"
              className="md:w-[270px] w-[180px] md:h-[310px] h-[180px]"
            />
            <img
              src="/five3.png"
              className="md:w-[270px] w-[180px] md:h-[310px] h-[180px]"
            />
          </div>
          {/* right 2 banner  */}
          <div className="flex flex-row md:flex-col items-center justify-center gap-5">
            <img
              src="/five4.png"
              className="md:w-[270px] w-[180px] md:h-[310px] h-[180px]"
            />
            <img
              src="/five4.png"
              className="md:w-[270px] w-[180px] md:h-[310px] h-[180px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiveBanner;
