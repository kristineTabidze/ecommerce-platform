import { RadioGroup as RadioGroupUi } from "@headlessui/react";
import React from "react";
import { twMerge } from "tailwind-merge";
import { formatPrice } from "../../organisms/ProductPage/utils";

type value = string | number;

export interface ITabProps {
  value: string | number;
  title: string;
  description?: string;
  price?: number;
}

const RadioGroup: React.FC<{
  options: ITabProps[];
  value: value;
  onChange: (val: value) => void;
  className?: string;
}> = ({ options, value, onChange, className = "" }) => {
  return (
    <div className="w-full">
      <div className="mx-auto w-full">
        <RadioGroupUi value={value}>
          <div className={className}>
            {options.map((option) => (
              <RadioGroupUi.Option
                key={option.value}
                value={option.value}
                onClick={() => onChange(option.value)}
                className={({ active }) =>
                  twMerge(
                    "border border-solid border-gray-300 shadow-sm hover:border-gray-400 relative flex cursor-pointer rounded-lg py-5 px-6 focus:outline-none",
                    active ? "ring ring-[#9FA6B273] border-gray-400" : "",
                    value === option.value ? "border-[2px] border-gray-700" : ""
                  )
                }
              >
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col items-start justify-center gap-2">
                    <RadioGroupUi.Label
                      as="p"
                      className="font-medium text-gray-900 text-sm"
                    >
                      {option.title}
                    </RadioGroupUi.Label>
                    {option.description && (
                      <RadioGroupUi.Description
                        as="span"
                        className="font-normal text-gray-500 text-sm"
                      >
                        {option.description}
                      </RadioGroupUi.Description>
                    )}
                  </div>
                  {option.price && (
                    <div>+ {formatPrice(option.price, "USD")} </div>
                  )}
                </div>
              </RadioGroupUi.Option>
            ))}
          </div>
        </RadioGroupUi>
      </div>
    </div>
  );
};

export default RadioGroup;
