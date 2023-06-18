import { CarCard } from '@/entities';
import { ShowMore } from '@/features';
import { ICar } from '@/shared/types';
import React from 'react';
import { CarDataEmptyCheck } from './helpers/CarDataEmptyCheck';

interface CarsCatalogueGridProps {
  carData: ICar[];
  children: React.ReactNode;
}

export const CarsCatalogueGrid = ({
  carData,
  children
}: CarsCatalogueGridProps) => {
  return (
    <>
      {carData && !CarDataEmptyCheck(carData) ? (
        <section className="min-[1024px]:px-56 px-12">
          <div className="home__cars-wrapper">
            {carData.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
          {children}
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">No results</h2>
        </div>
      )}
    </>
  );
};
