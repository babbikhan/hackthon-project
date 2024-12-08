import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="bg-[#F0F2F3] rounded-bl-[48px] md:h-[850px] flex flex-wrap items-center justify-center relative px-4 sm:px-8">
        {/* left side text  */}
        <div className="md:w-[50%] md:absolute top-[229px] left-[70px] md:mt-0 mt-10 md:text-left text-center">
          <div className="uppercase font-normal text-[14px] leading-[14px] tracking-[12%]">
            welcome to chairy
          </div>
          <div className=" font-bold md:text-[60px] text-3xl md:leading-[66px] leading-8 md:mt-2 mt-4">
            Best Furniture Collection for your interior.
          </div>
          <div className="group flex items-center md:justify-start justify-center ">
            <Link href={"/products"}>
              <button className="flex items-center justify-center gap-3 group-hover:bg-white bg-[#029FAE] border border-[#029FAE] md:py-[14px] py-2 md:px-[24px] px-4  rounded-lg mt-10">
                <span className="text-white group-hover:text-[#029fae] text-[16px]">
                  Shop Now
                </span>
                <FaArrowRight className="text-white group-hover:text-[#029fae] " />
              </button>
            </Link>
          </div>
        </div>
        {/* right side image  */}
        <div className="md:block hidden md:w-[50%]">
          <img
            src="/heroimage.png"
            className="md:w-[434px] md:h-[584px] absolute top-[115px] left-[777px] "
          />
        </div>
        <div className="md:hidden block w-full md:w-[50%] my-8 flex justify-center md:justify-start">
          <img
            src="/heroimage.png"
            className="md:w-[434px] w-[350px] md:h-[584px] h-[350px] object-contain"
            alt="Hero Furniture"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
