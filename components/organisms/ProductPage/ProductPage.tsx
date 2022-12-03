import React from "react";
import _ from 'lodash';
import List from "../../atoms/List";
import Header from "../../molecules/Header";
import FootControler from "../../molecules/ProductDetailMultipleChoice/FormFactor/FootControer";
import FormFactor from "../../molecules/ProductDetailMultipleChoice/FormFactor/FormFactor";
import PowerChoice from "../../molecules/ProductDetailMultipleChoice/FormFactor/Power";
import ProductImages from "../../molecules/ProductImages";
import ProductInfo from "../../molecules/ProductInfo";
import { IProduct } from "./types";

const ProductPage: React.FC<{
  productInformation: IProduct;
  productDescription: {
    description: string;
    name: string;
    price: string;
  };
}> = ({ productInformation, productDescription }) => {
  const options: Omit<IProduct, "images"> = _.omit(
    productInformation,
    "images"
  );

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <Header />
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <ProductImages images={productInformation?.images || []} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <ProductInfo
              description={productDescription.description}
              price={productDescription.price}
              title={productDescription.name}
            />
            <FormFactor />
            <PowerChoice />
            <FootControler />
            <List
              listOptions={options as Record<string, string | number>}
              title="Specifications"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
