'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface buttonProps {
  direction: 'imageFirst' | 'titleFirst';
  title?: string;
  imageSrc?: string;
  imageSize?: number;
  isDisabled?: boolean;
  type: 'button' | 'submit';
  eventClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  classStyles: string;
  href?: string;
}

export const Button: React.FC<buttonProps> = ({
  title,
  imageSrc,
  isDisabled,
  type,
  eventClick,
  direction,
  classStyles,
  imageSize,
  href
}) => {
  const renderButtonContent = () => {
    return (
      <span
        className={`flex ${
          direction === 'imageFirst' ? 'flex-row' : 'flex-row-reverse'
        } w-full`}
      >
        {imageSrc && (
          <Image
            className="relative right-2"
            height={imageSize}
            width={imageSize}
            alt={`${title} icon`}
            src={imageSrc}
          />
        )}
        {title && (
          <span className="flex text-lg text-center justify-center w-full ">
            {title}
          </span>
        )}
      </span>
    );
  };

  return (
    <button
      disabled={isDisabled}
      type={type}
      className={`custom-btn ${classStyles}`}
      onClick={eventClick}
    >
      {href ? (
        <Link href="#discover">{renderButtonContent()}</Link>
      ) : (
        <>{renderButtonContent()}</>
      )}
    </button>
  );
};
