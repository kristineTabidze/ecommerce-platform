import { RadioGroup as RadioGroupUi } from "@headlessui/react";
import classNames from "classnames";
import React from "react";

type value = string | number;

export interface ITabProps {
  value: string | number;
  title: string;
  description?: string;
}

const RadioGroup: React.FC<{
  options: ITabProps[];
  value: value;
  onChange: React.Dispatch<React.SetStateAction<value>>;
  className?: string;
}> = ({ options, value, onChange, className = "" }) => {
  return (
    <div className="w-full">
      <div className="mx-auto w-full">
        <RadioGroupUi value={value} onChange={onChange}>
          <div className={classNames(className)}>
            {options.map((option) => (
              <RadioGroupUi.Option
                key={option.value}
                value={option.value}
                className={({ active, checked }) =>
                  `border border-solid border-gray-300 shadow-sm hover:border-gray-400 ${
                    active ? "ring ring-[#9FA6B273]" : ""
                  }
                  ${checked ? "border-[3px] border-gray-700" : ""}
                    relative flex cursor-pointer rounded-lg py-5 px-6 focus:outline-none `
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full flex-col items-start justify-center gap-2">
                      <RadioGroupUi.Label
                        as="p"
                        className="font-medium text-gray-900 text-sm"
                      >
                        {option.title}
                      </RadioGroupUi.Label>
                      <RadioGroupUi.Description
                        as="span"
                        className="font-normal text-gray-500 text-sm"
                      >
                        {option.description}
                      </RadioGroupUi.Description>
                    </div>
                  </>
                )}
              </RadioGroupUi.Option>
            ))}
          </div>
        </RadioGroupUi>
      </div>
    </div>
  );
};

export default RadioGroup;
