import React from "react";
import InnerProduct from "../Components/InnerProduct"; // InnerProduct for detailed product view
import Products from "../Components/Products"; // Products for a list of product items
import Link from "next/link"; // Link component for navigation
import ProductPageSlider from "../Components/ProductPageSlider";

export default function ProductPage() {
  // Array of product objects for the list view
  const products1 = [
    {
      image: "/blackchair.png",
      flag: "new",
      name: "Library Stool Chair",
      price: "$99",
      discount: "$0",
    },
    {
      image: "/librarystool.png",
      flag: "sale",
      name: "Library Stool Chair",
      price: "$99",
      discount: "$30",
    },
    {
      image: "/deskchair.png",
      flag: "none",
      name: "Library Stool Chair",
      price: "$99",
      discount: "$0",
    },
    {
      image: "/orangechair.png",
      flag: "none",
      name: "Library Stool Chair",
      price: "$99",
      discount: "$0",
    },
    {
      image: "/wingchair.png",
      flag: "none",
      name: "Library Stool Chair",
      price: "$99",
      discount: "$0",
    },
  ];

  return (
    <div className="md:my-10 ">
      {/* Rendering the detailed view for a single product */}
      <div className="md:my-20">
        <InnerProduct
          imageUrl="/librarystool.png" // Ensure the image path is correct
          title="Library Stool Chair"
          price="$20.00 USD"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing."
        />
      </div>

      <ProductPageSlider
        direction="left"
        heading="Featured Products"
        products={products1}
      />
      {/* Rendering the product list view */}
      {/* <section className="max-w-screen-xl mx-auto my-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-[32px] leading-[35.2px] text-left w-full text-[#272343]">
            Featured Products
          </h2>
         
          <Link href="/all-products">
            <button className="text-black text-[18px] hover:text-[#027f89] hover:underline font-bold px-6 py-2 whitespace-nowrap">
              View All
            </button>
          </Link>
        </div>
       Products
        <Products
          direction="left" // Aligns content based on the "direction" prop
          heading="" // No heading as it's already above
          products={products1} // Pass the products array to the Products component
        />
      </section>
        */}
    </div>
  );
}
