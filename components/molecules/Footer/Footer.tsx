import React from "react";
import FooterInfo from "./FooterInfo";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 flex items-center justify-between py-6 px-24 w-full bg-gray-50">
      <div className="flex gap-8">
        <FooterInfo
          icon={<div>bla</div>}
          title="Free Shipping"
          description="Get 2-day free shipping anywhere in North America."
        />
        <FooterInfo
          icon={<div>bla</div>}
          title="2 Year Warranty"
          description="If anything goes wrong in the first two years, we'll replace it for free."
        />
      </div>
    </footer>
  );
};

export default Footer;
