import React from 'react';
import Image from "next/image";
import {galleryStyles as tailwindStyles} from './styles.tailwind'

export const ImageGallery = () => {
  return (
    <div className={tailwindStyles.container}>
      <Image className={tailwindStyles.image} width={320} height={320} src={'/img.jpg'} alt={'midjourney img'} />
      <Image className={tailwindStyles.image} width={320} height={320} src={'/img.jpg'} alt={'midjourney img'} />
      <Image className={tailwindStyles.image} width={320} height={320} src={'/img.jpg'} alt={'midjourney img'} />
    </div>
  );
};
