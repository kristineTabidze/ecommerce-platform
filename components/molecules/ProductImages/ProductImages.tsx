import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { useState } from "react";
import { IProductImages } from "./types";

const ProductImages: React.FC<IProductImages> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <Tab
              key={image.id}
              onClick={() => setCurrentImage(image)}
              className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
            >
              <>
                <span className="sr-only"> {image.name} </span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <img
                    src={image.src}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </span>
                <span
                  className={classNames(
                    currentImage.id === image.id
                      ? "ring-indigo-500"
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
              className="h-full w-full object-cover object-center sm:rounded-lg"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ProductImages;
