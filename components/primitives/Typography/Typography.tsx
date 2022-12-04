import { twMerge } from "tailwind-merge";
import React from "react";
import { ITypographyProps } from "./types";

const H1: React.FC<ITypographyProps> = ({ className = "", children }) => {
  return (
    <h1 className={twMerge("text-gray-900 text-sm font-medium m-0", className)}>
      {children}
    </h1>
  );
};

const H2: React.FC<ITypographyProps> = ({ className = "", children }) => {
  return (
    <h2 className={twMerge("text-gray-500 font-normal text-sm m-0", className)}>
      {children}
    </h2>
  );
};

const Typography = {
  H1,
  H2,
};

export default Typography;
