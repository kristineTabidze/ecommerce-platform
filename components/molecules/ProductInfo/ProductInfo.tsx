import React from "react";
import { IProductInfo } from "./types";

const ProductInfo: React.FC<IProductInfo> = ({ price, description, title }) => {
  return (
    <div>
      <p className="text-gray-500 text-sm font-medium	">Starting at</p>
      <h1 className="font-extrabold text-5xl text-gray-900 ">{price}</h1>
      <h2 className="text-lg text-gray-900 mt-6 mb-4">{title}</h2>
      <div
        className="space-y-6 text-base text-gray-500"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default ProductInfo;
