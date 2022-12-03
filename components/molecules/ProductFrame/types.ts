import React from "react";

export interface IProductFrame {
  fields: {
    currentValue: string;
    onClick: (val: string) => void;
    value: string;
    children: React.ReactNode
  }[];
}