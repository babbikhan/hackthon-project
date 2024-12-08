import React from "react";
import InnerProduct from "../Components/InnerProduct"; // InnerProduct for detailed product view
import Products from "../Components/Products"; // Products for a list of product items
import Link from "next/link"; // Link component for navigation

export default function ProductsPage() {
  // Array of product objects for the list view
  const products1 = [
    {
      image: "/blackchair.png",
      flag: "new",
      name: "Library Stool Chair",
      price: "$20",
      discount: "$0",
    },
    {
      image: "/librarystool.png",
      flag: "sale",
      name: "Library Stool Chair",
      price: "$20",
      discount: "$30",
    },
    {
      image: "/deskchair.png",
      flag: "none",
      name: "Library Stool Chair",
      price: "$20",
      discount: "$0",
    },
    {
      image: "/orangechair.png",
      flag: "none",
      name: "Library Stool Chair",
      price: "$20",
      discount: "$0",
    },
    {
      image: "/woodenchair.png",
      flag: "new",
      name: "Library Stool Chair",
      price: "$20",
      discount: "$0",
    },
    {
      image: "/blackchair.png",
      flag: "sale",
      name: "Library Stool Chair",
      price: "$20",
      discount: "$0",
    },
    {
      image: "/librarystool.png",
      flag: "none",
      name: "Library Stool Chair",
      price: "$20",
      discount: "$30",
    },
    {
      image: "/deskchair.png",
      flag: "none",
      name: "Library Stool Chair",
      price: "$20",
      discount: "$0",
    },
    {
      image: "/orangechair.png",
      flag: "new",
      name: "Library Stool Chair",
      price: "$20",
      discount: "$0",
    },
    {
      image: "/blackchair.png",
      flag: "sale",
      name: "Library Stool Chair",
      price: "$20",
      discount: "$0",
    },
    {
      image: "/librarystool.png",
      flag: "none",
      name: "Library Stool Chair",
      price: "$20",
      discount: "$30",
    },
    {
      image: "/deskchair.png",
      flag: "none",
      name: "Library Stool Chair",
      price: "$20",
      discount: "$0",
    },
  ];

  return (
    <div className="my-10">
      <Products direction="left" heading="All Products" products={products1} />
    </div>
  );
}
