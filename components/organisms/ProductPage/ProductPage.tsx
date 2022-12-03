import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import FormFrame from "../../atoms/FormFrame";
import Header from "../../molecules/Header";
import ProductImages from "../../molecules/ProductImages";
import ProductInfo from "../../molecules/ProductInfo";
import { IProduct } from "./types";

const product = {
  name: "Zip Tote Basket",
  price: "$140",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 2,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    // More sections...
  ],
};

const ProductPage: React.FC<IProduct> = ({}) => {
  const [formFactor, setFormFactor] = useState<"head" | "back">("head");

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <Header />
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <ProductImages images={product.images} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <ProductInfo
              description={product.description}
              price={product.price}
              title={product.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
