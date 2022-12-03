import React from 'react';
import Frame from '../Frame';
import { IImageFrame } from './types';

const ImageFrame: React.FC<IImageFrame> = ({name, src, selected = false}) => {
    return (
      <>
        <Frame selected={selected} name={name}>
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </Frame>
      </>
    );
}

export default ImageFrame;