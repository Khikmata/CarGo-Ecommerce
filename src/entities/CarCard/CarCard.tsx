'use client'

import { Button, CarCostBlock, CarDetails, CarMetricsSection } from '@/shared'
import { getCarImage } from '@/shared/API/fetchCars'

import { ICar } from '@/shared/types'
import rightIcon from '@images/right-arrow.svg'
import { useState } from 'react'

interface CarCardProps {
  car: ICar
}

export const CarCard = ({ car }: CarCardProps) => {
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmition,
    year,
    class: carClass,
  } = car

  const [isOpen, setIsOpen] = useState(false)

  const handleCarDetailsModal = () => {
    setIsOpen((state) => (state = !state))
  }

  return (
    <div className="car-card group">
      <div className="car-card__content h-full">
        <h2>
          {make} {model}
        </h2>
      </div>
      <CarCostBlock city_mpg={car.city_mpg} year={car.year} />
      <div className="relative w-full my-3 object-fit">
        <img src={`${getCarImage(car)}`} alt="car image" className="object-fit" />
      </div>
      <div className="relative flex w-full mt-2">
        <CarMetricsSection car={car} />
        <div className="car-card__btn-container">
          <Button
            classStyles="w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] leading-[17px] font-bold"
            type="button"
            isDisabled={false}
            direction="titleFirst"
            title="View More..."
            imageSrc={rightIcon}
            imageSize={20}
            eventClick={handleCarDetailsModal}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} handleCarDetailsModal={handleCarDetailsModal} car={car} />
    </div>
  )
}
