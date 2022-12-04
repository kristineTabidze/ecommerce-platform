import React, { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import List from "../../atoms/List";
import Header from "../../molecules/Header";
import FormFactor from "../../molecules/ProductDetailMultipleChoice/FormFactor";
import ProductImages from "../../molecules/ProductImages";
import ProductInfo from "../../molecules/ProductInfo";
import { IProduct, IProductPageProps } from "./types";
import Footer from "../../molecules/Footer";
import FootControler from "../../molecules/ProductDetailMultipleChoice/FootControer";
import PowerChoice from "../../molecules/ProductDetailMultipleChoice/Power";
import { formatPrice } from "./utils";

const initialValues = {
  formFactor: "head",
  power: 0,
  footController: 0,
};

const ProductPage: React.FC<IProductPageProps> = ({
  productInformation,
  productDescription,
}) => {
  const options: Omit<IProduct, "images"> = _.omit(
    productInformation,
    "images"
  );
  const [productAdditionalDetails, setProductAdditionalDetails] =
    useState<Record<string, number | string>>(initialValues);
  const [currentPrice, setCurrentPrice] = useState(
    productDescription.price.value
  );

  const onChange = useCallback((key: string, value: string | number) => {
    setProductAdditionalDetails((x) => {
      let obj = { ...x };
      obj[key] = value;
      return obj;
    });
  }, []);

  useEffect(() => {
    let price = productDescription.price.value;
    Object.values(productAdditionalDetails).forEach((x) => {
      if (typeof x === "number") {
        price += x;
      }
    });
    setCurrentPrice(price);
  }, [productAdditionalDetails, productDescription.price.value]);

  return (
    <>
      <div className="bg-white pb-[189px] px-4 pt-12 sm:pt-[72px] md:px-28 sm:px-12 lg:px-8 xl:px-28">
        <Header />
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 mt-12 relative">
          <ProductImages images={productInformation?.images || []} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <ProductInfo
              description={productDescription.description}
              price={formatPrice(
                productDescription.price.value,
                productDescription.price.currency
              )}
              title={productDescription.name}
            />
            <FormFactor
              value={productAdditionalDetails.formFactor}
              onChange={(val) => onChange("formFactor", val)}
            />
            <PowerChoice
              value={productAdditionalDetails.power}
              onChange={(val) => onChange("power", val)}
            />
            <FootControler
              value={productAdditionalDetails.footController}
              onChange={(val) => onChange("footController", val)}
            />
            <List
              listOptions={options as Record<string, string | number>}
              title="Specifications"
            />
          </div>
        </div>
      </div>
      <Footer
        price={formatPrice(currentPrice, productDescription.price.currency)}
      />
    </>
  );
};

export default ProductPage;
