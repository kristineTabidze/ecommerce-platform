import React from "react";

const FooterInfo: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="flex align-start justify-start gap-3 w-[288px]">
      <div>{icon}</div>
      <div>
        <p className="text-gray-900 font-medium text-sm">{title}</p>
        <p className="text-gray-500 font-normal text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FooterInfo;
