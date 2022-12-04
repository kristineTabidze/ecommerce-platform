import React from "react";
import Typography from "../../primitives/Typography";

const FooterInfo: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="flex align-start justify-start gap-3 lg:w-[288px]">
      <div>{icon}</div>
      <div>
        <Typography.H1>{title} </Typography.H1>
        <Typography.H2 className="hidden lg:block">
          {description}
        </Typography.H2>
      </div>
    </div>
  );
};

export default FooterInfo;
