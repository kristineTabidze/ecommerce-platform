import React from "react";
import Typography from "../../primitives/Typography";
import { IProductInfo } from "./types";

const ProductInfo: React.FC<IProductInfo> = ({ price, description, title }) => {
  return (
    <div>
      <Typography.H2 className="font-medium">Starting at</Typography.H2>
      <Typography.H1 className="font-extrabold text-5xl mt-6 mb-4">
        {price}
      </Typography.H1>
      <Typography.H1 className="text-lg font-normal mt-6 mb-4">{title}</Typography.H1>
      <div
        className="space-y-6 text-base text-gray-500"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default ProductInfo;
