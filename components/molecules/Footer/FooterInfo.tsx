import React from "react";
import Typography from "../../primitives/Typography";

const FooterInfo: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="flex align-start justify-start gap-3 w-[288px]">
      <div>{icon}</div>
      <div>
        <Typography.H1>{title} </Typography.H1>
        <Typography.H2>{description} </Typography.H2>
      </div>
    </div>
  );
};

export default FooterInfo;
