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
      name: "amp front view",
      src: "https://www.kemper-amps.com/images/pagecontent/products_profiler-head-black_cropped_wh.jpg?v5",
      alt: "amp front view",
    },
    {
      id: 2,
      name: "amp side view",
      src: "https://cdn.shopify.com/s/files/1/0244/0329/products/kemper-amplifier-black-kemper-profiler-head-27993372557373_78d2acba-6da5-43c5-a61e-5f3f83dbab06.jpg?v=1661124717",
      alt: "amp side view",
    },
    {
      id: 3,
      name: "amp back view",
      src: "https://cdn3.volusion.com/lqpzc.dkrfy/v/vspfiles/photos/19521-5.jpg?v-cache=1645439189",
      alt: "amp back view",
    },
  ],
};

const productDescription = {
  description:
    "Hailed as a game-changer by guitarists the world over, the PROFILER™ is the first digital guitar amp to really nail the full and dynamic sound of a guitar or bass amp. \n This is made possible by a radical, patented technology and concept which we call 'PROFILING'.",
  name: "The KEMPER PROFILER™ is the leading-edge digital guitar amplifier and all-in-one effects processor.",
  price: {
    value: 1799,
    currency: "USD",
  },
};

const Product: React.FC = () => {
  // in real life, this would be a call to an API to get the product information
  // it would happen with getstatisprops
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
