import { RadioGroup as RadioGroupUi } from "@headlessui/react";
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
}> = ({ options, value, onChange }) => {
  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <RadioGroupUi value={value} onChange={onChange}>
          <RadioGroupUi.Label className="sr-only">Server size</RadioGroupUi.Label>
          <div className="space-y-2">
            {options.map((option) => (
              <RadioGroupUi.Option
                key={option.value}
                value={option.value}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                      : ""
                  }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroupUi.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {option.title}
                          </RadioGroupUi.Label>
                          <RadioGroupUi.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-sky-100" : "text-gray-500"
                            }`}
                          >
                            {option.description}
                            <span aria-hidden="true">&middot;</span>
                          </RadioGroupUi.Description>
                        </div>
                      </div>
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
