import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { useState } from "react";
import { IProductImages } from "./types";

const ProductImages: React.FC<IProductImages> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <Tab.Group as="div" className="flex flex-col-reverse lg:sticky top-7">
      <div className="mx-auto mt-6 w-full">
        <Tab.List className="flex justify-between lg:w-max lg:gap-6 ">
          {images.map((image) => (
            <Tab
              key={image.id}
              onClick={() => setCurrentImage(image)}
              className="ring ring-gray-200 ring-offset-1 hover:ring-gray-400 relative flex shadow-sm w-[86px] h-[46px] sm:w-[170px] sm:h-[92px] lg:h-[78px] lg:w-[144px] xl:h-[100px] xl:w-[186px] cursor-pointer items-center justify-center rounded-lg bg-white focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
            >
              <>
                <span className="sr-only"> {image.name} </span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <img
                    src={image.src}
                    alt=""
                    className="h-full w-full object-contain object-center"
                  />
                </span>
                <span
                  className={classNames(
                    currentImage.id === image.id
                      ? "ring ring-gray-700"
                      : "ring-transparent",
                    "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                  )}
                  aria-hidden="true"
                />
              </>
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[206px] sm:h-[360px] lg:h-[342px] lg:w-[592px] object-contain object-center sm:rounded-lg shadow-sm bg-white border-solid border border-[#E5E7EB]"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ProductImages;
