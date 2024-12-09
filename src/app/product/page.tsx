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
    </div>
  );
}
