import Link from "next/link";
import ProductCard from "./ProductCard";
import ProductCardSlider from "./ProductCardSlider";

// Define the structure of each product
interface Product {
  image: string;
  flag: string;
  name: string;
  price: string;
  discount: string;
}

// Update the ProductProp to include the correct array type for products
interface ProductProp {
  heading: string;
  direction: string;
  products: Product[]; // Array of Product objects
}

const ProductPageSlider: React.FC<ProductProp> = ({
  heading,
  direction,
  products,
}) => {
  return (
    <section className="max-w-screen-xl mx-auto md:mt-10 mt-5">
      {/* heading */}
      <div className="flex items-center justify-between md:mx-0 mx-6 ">
        <div
          className={`font-bold md:text-[24px] text-sm md:leading-[33.89px] md:tracking-[5px] tracking-[1px] whitespace-nowrap ${
            direction === "center" ? "text-center" : "text-left"
          }  text-[#272343] uppercase`}
        >
          {heading}
        </div>
        <Link href={"/products"}>
          <div
            className={`font-bold underline text-[14px] leading-[21.78px] tracking-[2px] text-right w-full text-[#272343]`}
          >
            View all
          </div>
        </Link>
      </div>

      {/* products */}
      <div className="flex flex-wrap items-center md:justify-between justify-center md:my-5 my-2">
        {products?.map((product) => (
          <ProductCardSlider item={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductPageSlider;
