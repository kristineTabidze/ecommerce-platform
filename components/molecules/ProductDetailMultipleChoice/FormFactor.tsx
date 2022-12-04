import React from "react";
import TabList from "../../atoms/RadioGroup";
import { ITabProps } from "../../atoms/RadioGroup/RadioGroup";
import Typography from "../../primitives/Typography";
import { IMultipleChoiceProps } from "./types";

const FormFactor: React.FC<IMultipleChoiceProps> = ({ value, onChange }) => {
  const tabList: ITabProps[] = [
    {
      value: "head",
      title: "Profiler Head",
      description:
        "Compact amplifier head, perfect for a speaker cabinet or desk.",
    },
    {
      value: "back",
      title: "Profiler Back",
      description: "3U rackmount version of the classic profiling amplifier.",
    },
  ];

  return (
    <div className="my-12">
      <Typography.H1 className="text-lg mb-2">Form Factor</Typography.H1>
      <TabList
        value={value}
        onChange={onChange}
        options={tabList}
        className="grid lg:grid-cols-2 gap-4"
      />
    </div>
  );
};

export default FormFactor;
