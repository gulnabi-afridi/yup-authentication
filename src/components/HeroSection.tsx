import React from 'react';
import {heroSectionStyles as tailwindStyles} from './styles.tailwind'

export const HeroSection = () => {
  return (
    <div className={tailwindStyles.container}>
      <h1 className={tailwindStyles.title}>
        Data to enrich your online business
      </h1>
      <p className={tailwindStyles.description}>
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
        amet
        fugiat veniam occaecat fugiat aliqua.
      </p>
      <div className={tailwindStyles.buttonContainer}>
        <a
          href="#"
          className={tailwindStyles.button}
        >
          Get started
        </a>
        <a href="#" className={tailwindStyles.link}>
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
};
