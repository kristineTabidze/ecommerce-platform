import { Tab } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { IProductImages } from "./types";

const ProductImages: React.FC<IProductImages> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <Tab.Group
      as="div"
      className="flex flex-col-reverse lg:sticky top-7 lg:w-[592px]"
    >
        <div className="mx-auto mt-6 w-full">
          <Tab.List className="flex justify-between gap-4 lg:gap-6 ">
            {images.map((image) => (
              <Tab
                key={image.id}
                onClick={() => setCurrentImage(image)}
                className={twMerge(
                  "border border-solid border-gray-200 hover:border-gray-400 focus:outline-none focus:ring focus:ring-[#9FA6B273] focus:border-gray-400 relative flex w-1/3 h-[46px] sm:h-[92px] lg:h-[78px] xl:h-[100px] cursor-pointer items-center justify-center rounded-lg bg-white",
                  currentImage.id === image.id
                    ? "border-[2px] !border-gray-700"
                    : ""
                )}
              >
                <img
                  src={image.src}
                  alt=""
                  className="h-full w-full object-contain object-center"
                />
              </Tab>
            ))}
          </Tab.List>
        </div>

        <Tab.Panels className="w-full aspect-h-1 w-full">
          {images.map((image) => (
            <Tab.Panel key={image.id}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[206px] sm:h-[360px] lg:h-[342px] object-contain object-center sm:rounded-lg shadow-sm bg-white border-solid border border-[#E5E7EB]"
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
    </Tab.Group>
  );
};

export default ProductImages;
