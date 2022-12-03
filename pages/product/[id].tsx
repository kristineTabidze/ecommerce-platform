import React from "react";
import ProductPage from "../../components/organisms/ProductPage";
import { IProduct } from "../../components/organisms/ProductPage/types";

const sampleProduct: IProduct = {
  ampModel: 200,
  effectsLoop: "true",
  inputs: '2 x 1/4"',
  outputs: '2 x 1/4"',
  midi: "IN",
  height: 8.54,
  width: 12.2,
  depth: 6.1,
  weight: 10.5,
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
      src: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Angled front view with bag zipped and handles upright.",
    },
  ],
};

const productDescription = {
  description:
    "Hailed as a game-changer by guitarists the world over, the PROFILER™ is the first digital guitar amp to really nail the full and dynamic sound of a guitar or bass amp. \n This is made possible by a radical, patented technology and concept which we call 'PROFILING'.",
  name: "The KEMPER PROFILER™ is the leading-edge digital guitar amplifier and all-in-one effects processor.",
  price: "$1,799",
};

const Product: React.FC = () => {
  return (
    <div>
      <ProductPage
        productInformation={sampleProduct}
        productDescription={productDescription}
      />
    </div>
  );
};

export default Product;
