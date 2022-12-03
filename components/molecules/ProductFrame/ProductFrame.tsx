import { Tab } from "@headlessui/react";
import React from "react";
import FormFrame from "../../atoms/FormFrame";
import { IProductFrame } from "./types";

const ProductFrame: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {children}
          {/* {fields.map((field) => (
              <FormFrame
                isSelected={field.currentValue === field.value}
                onClick={field.onClick}
                value={field.value}
                key={field.value}
              >
                {field.children}
              </FormFrame>
            ))} */}
        </Tab.List>
      </div>
    </Tab.Group>
  );
};

export default ProductFrame;
