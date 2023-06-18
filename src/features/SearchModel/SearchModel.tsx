import modelIcon from '@images/model-icon.png';
import Image from 'next/image';
import React from 'react';
interface SearchModelProps {
  model: string;
  setActiveModel: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchModel = ({ model, setActiveModel }: SearchModelProps) => {
  return (
    <>
      <Image
        src={modelIcon}
        width={25}
        height={25}
        className="absolute w-[20px] h-[20px] ml-4"
        alt="car model"
      />
      <input
        type="text"
        name="model"
        value={model}
        onChange={setActiveModel}
        placeholder="Tiguan..."
        className="searchbar__input"
      />
    </>
  );
};
