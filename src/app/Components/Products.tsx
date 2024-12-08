import ProductCard from "./ProductCard";

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

const Products: React.FC<ProductProp> = ({ heading, direction, products }) => {
  return (
    <section className="max-w-screen-xl mx-auto my-3">
      {/* heading */}
      <div
        className={`font-semibold md:mx-0 mx-5 md:text-[32px] text-2xl leading-[35.2px] ${
          direction === "center" ? "text-center" : "text-left"
        } w-full text-[#272343]`}
      >
        {heading}
      </div>

      {/* products */}
      <div className="flex flex-wrap items-center md:justify-between justify-center my-5">
        {products?.map((product) => (
          <ProductCard item={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
