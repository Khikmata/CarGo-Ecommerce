'use client';
import heroBg from '@images/hero-bg.png';
import hero from '@images/hero.png';
import Image from 'next/image';
import { Button } from '../Button/Button';

export const Hero = () => {
  const handleHeroButton = (e: React.MouseEvent<HTMLElement>) => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Looking for a car to rent?</h1>
        <p className="hero__subtitle">
          Find it here, without any effort or difficulties
        </p>
        <Button
          eventClick={handleHeroButton}
          isDisabled={false}
          type={'button'}
          direction="imageFirst"
          title="Explore cars"
          classStyles="bg-primary-blue text-white rounded-3xl mt-10 "
          href="#discover"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src={hero}
            alt="hero-background"
            fill
            className="object-contain"
          />
        </div>
        <Image className="hero__image-overlay" src={heroBg} alt="herobg" />
      </div>
    </div>
  );
};
