import Marquee from "react-fast-marquee";

const BrandSlider = () => {
  return (
    <section className="max-w-screen-xl mx-auto my-5">
      <Marquee
        loop={0}
        speed={70}
        className="flex items-center md:justify-between justify-center"
      >
        <img src="/zapier.png" className="w-[85px] h-[87px]  mx-5" />
        <img src="/pipedrive.png" className="w-[107px] h-[109px]  mx-5" />
        <img src="/cibbank.png" className="w-[135px] h-[139px]  mx-5" />
        <img src="/z.png" className="w-[63px] h-[65px]  mx-5" />
        <img src="/burnttoast.png" className="w-[98px] h-[101px]  mx-5" />
        <img src="/pandadoc.png" className="w-[113px] h-[115px]  mx-5" />
        <img src="/moz.png" className="w-[84px] h-[87px]  mx-5" />
        <img src="/zapier.png" className="w-[85px] h-[87px]  mx-5" />
        <img src="/pipedrive.png" className="w-[107px] h-[109px]  mx-5" />
        <img src="/cibbank.png" className="w-[135px] h-[139px]  mx-5" />
        <img src="/z.png" className="w-[63px] h-[65px]  mx-5" />
        <img src="/burnttoast.png" className="w-[98px] h-[101px]  mx-5" />
        <img src="/pandadoc.png" className="w-[113px] h-[115px]  mx-5" />
        <img src="/moz.png" className="w-[84px] h-[87px]  mx-5" />
      </Marquee>
    </section>
  );
};

export default BrandSlider;
