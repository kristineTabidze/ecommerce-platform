export interface IImmage {
  src: string;
  name: string;
  selected?: boolean;
  alt: string;
  id: number;
}

export interface IProductImages {
  images: IImmage[];
}
