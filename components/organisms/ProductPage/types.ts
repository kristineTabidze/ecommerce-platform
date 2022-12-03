import { IImmage } from "../../molecules/ProductImages/types";

export interface IProduct {
  ampModel: number;
  effectsLoop: string;
  inputs: string;
  outputs: string;
  midi: string;
  height: number;
  width: number;
  depth: number;
  weight: number;
  images?: IImmage[];
}