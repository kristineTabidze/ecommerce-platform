import React from "react";
import Button from "../../atoms/Button";
import Typography from "../../primitives/Typography";
import FooterInfo from "./FooterInfo";
import { ReactComponent as GlobeIcon } from "../../../assets/svg/sm-globe.svg";
import { ReactComponent as ShieldIcon } from "../../../assets/svg/sm-shield-check.svg";

const Footer: React.FC<{ price: string }> = ({ price }) => {
  return (
    <footer className="fixed bottom-0 flex items-center justify-end sm:justify-between py-6 px-4 sm:px-12 md:px-28 lg:px-8 xl:px-24 w-full bg-gray-50">
      <div className="hidden sm:flex lg:gap-8 lg:flex-row sm:gap-5 flex-col ">
        <FooterInfo
          icon={<GlobeIcon />}
          title="Free Shipping"
          description="Get 2-day free shipping anywhere in North America."
        />
        <FooterInfo
          icon={<ShieldIcon />}
          title="2 Year Warranty"
          description="If anything goes wrong in the first two years, we'll replace it for free."
        />
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col justify-center items-end">
          <p className="text-gray-900 text-3xl font-bold">{price}</p>
          <Typography.H2 className="hidden sm:block">
            Need financing? <a href="#">Learn more</a>
          </Typography.H2>
        </div>
        <Button
          text="Buy now"
          onClick={() => {
            // should send request to server
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
