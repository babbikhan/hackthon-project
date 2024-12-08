import BrandSlider from "./Components/BrandSlider";
import Categories from "./Components/Categories";
import FiveBanner from "./Components/FiveBanner";
import HeroSection from "./Components/HeroSection";
import Products from "./Components/Products";

export default function Home() {
  const products1 = [
    {
      image: "/librarystool.png",
      flag: "new",
      name: "library stool chair",
      price: "$20",
      discount: "$0",
    },
    {
      image: "/pinkchair.png",
      flag: "sale",
      name: "library stool chair",
      price: "$20",
      discount: "$30",
    },
    {
      image: "/orangechair.png",
      flag: "none",
      name: "library stool chair",
      price: "$20",
      discount: "$0",
    },
    {
      image: "/whitesofa.png",
      flag: "none",
      name: "library stool chair",
      price: "$20",
      discount: "$0",
    },
  ];
  const products2 = [
    {
      image: "/librarystool.png",
      flag: "new",
      name: "library stool chair",
      price: "$20",
      discount: "$0",
    },
    {
      image: "/pinkchair.png",
      flag: "sale",
      name: "library stool chair",
      price: "$20",
      discount: "$30",
    },
    {
      image: "/orangechair.png",
      flag: "none",
      name: "library stool chair",
      price: "$20",
      discount: "$0",
    },
    {
      image: "/whitesofa.png",
      flag: "none",
      name: "library stool chair",
      price: "$20",
      discount: "$0",
    },
    {
      image: "/wingchair.png",
      flag: "new",
      name: "library stool chair",
      price: "$20",
      discount: "$0",
    },
    {
      image: "/graychair.png",
      flag: "sale",
      name: "library stool chair",
      price: "$20",
      discount: "$30",
    },
    {
      image: "/blackchair.png",
      flag: "none",
      name: "library stool chair",
      price: "$20",
      discount: "$0",
    },
    {
      image: "/librarystool.png",
      flag: "none",
      name: "library stool chair",
      price: "$20",
      discount: "$0",
    },
  ];

  return (
    <main className="">
      <HeroSection />
      <BrandSlider />
      <Products
        direction="left"
        heading="Featured Products"
        products={products1}
      />
      <Categories />
      <FiveBanner />
      <Products
        direction="center"
        heading="Our Products"
        products={products2}
      />
    </main>
  );
}
