import React from "react";
import { ITabProps } from "../../atoms/RadioGroup/RadioGroup";
import Typography from "../../primitives/Typography";
import TabList from "../../atoms/RadioGroup";
import { IMultipleChoiceProps } from "./types";

const FootControler: React.FC<IMultipleChoiceProps> = ({ value, onChange }) => {
  const tabList: ITabProps[] = [
    {
      value: 0,
      title: "None",
    },
    {
      value: 449,
      title: "Profiler Remote Foot Controller",
      price: 449,
    },
  ];

  return (
    <div className="my-12">
      <Typography.H1 className="text-lg mb-2">Foot Controller</Typography.H1>
      <TabList
        value={value}
        onChange={onChange}
        options={tabList}
        className="grid gap-4"
      />
    </div>
  );
};

export default FootControler;
