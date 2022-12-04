import React from "react";
import TabList from "../../atoms/RadioGroup";
import { ITabProps } from "../../atoms/RadioGroup/RadioGroup";
import Typography from "../../primitives/Typography";
import { IMultipleChoiceProps } from "./types";


const PowerChoice: React.FC<IMultipleChoiceProps> = ({ value, onChange }) => {
  const tabList: ITabProps[] = [
    {
      value: 0,
      title: "None",
      description: "Use in the studio or with your own power amp.",
    },
    {
      value: 449,
      title: "Powered",
      description: "Built-in 600W solid state power amp",
    },
  ];

  return (
    <div className="my-12">
      <Typography.H1 className="text-lg mb-2">Power Amp</Typography.H1>
      <TabList
        value={value}
        onChange={onChange}
        options={tabList}
        className="grid gap-4"
      />
    </div>
  );
};

export default PowerChoice;
