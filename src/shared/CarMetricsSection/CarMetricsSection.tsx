import gas from '@images/gas.svg';
import steeringWheel from '@images/steering-wheel.svg';
import tire from '@images/tire.svg';
import Image from 'next/image';
import React from 'react';
import { ICar } from '../types';

interface CarMetricsSectionProps {
  car: ICar;
}

export const CarMetricsSection: React.FC<CarMetricsSectionProps> = ({
  car
}) => {
  return (
    <div className="flex group-hover:invisible w-full justify-between text-gray">
      <div className="flex flex-col justify-center items-center gap-2">
        <Image src={steeringWheel} alt="wheel" width={20} height={20} />
        <p className="text-[14px]">
          {car.transmition === 'a' ? 'Automatic' : 'Manual'}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <Image src={tire} alt="wheel" width={20} height={20} />
        <p className="text-[14px]">{car.drive.toUpperCase()}</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <Image src={gas} alt="wheel" width={20} height={20} />
        <p className="text-[14px]">{car.city_mpg} MPG</p>
      </div>
    </div>
  );
};
