import React from "react";
import { IProductInfo } from "./types";

const ProductInfo: React.FC<IProductInfo> = ({ price, description, title }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        {title}
      </h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight text-gray-900">{price}</p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>

        <div
          className="space-y-6 text-base text-gray-700"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <section aria-labelledby="details-heading" className="mt-12">
        <h2 id="details-heading" className="sr-only">
          Additional details
        </h2>

        <div className="divide-y divide-gray-200 border-t"></div>
      </section>
    </div>
  );
};

export default ProductInfo;
