'use client';

import { Dialog, Transition } from '@headlessui/react';
import closeIcon from '@images/close.svg';
import Image from 'next/image';
import React from 'react';
import { getCarImage } from '../API/fetchCars';
import { Button } from '../Button/Button';
import { ICar } from '../types';

interface CarDetailsProps {
  car: ICar;
  handleCarDetailsModal: () => void;
  isOpen: boolean;
}

export const CarDetails: React.FC<CarDetailsProps> = ({
  car,
  handleCarDetailsModal,
  isOpen
}) => {
  return (
    <Transition appear show={isOpen} as="div">
      <Dialog
        as="div"
        className={'relative z-10'}
        onClose={handleCarDetailsModal}
      >
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-80"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-100"
            >
              <Dialog.Panel className={'car-details__dialog-panel'}>
                <Button
                  imageSrc={closeIcon}
                  direction="imageFirst"
                  imageSize={20}
                  classStyles=""
                  isDisabled={false}
                  type="button"
                  eventClick={handleCarDetailsModal}
                />
                <div className="flex-1 flex flex-col gap-3">
                  <div className="car-details__main-image">
                    <img
                      src={getCarImage(car, 'angle')}
                      alt="car image"
                      className="object-fit"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="gap-3 flex">
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <img
                        src={getCarImage(car, '29')}
                        alt="car image"
                        className="object-fit"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <img
                        src={getCarImage(car, '33')}
                        alt="car image"
                        className="object-fit"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <img
                        src={getCarImage(car, '13')}
                        alt="car image"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="font-semibold text-xl capitalize">
                    {car.make} {car.model}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-4">
                    {Object.entries(car).map(([key, value]) => (
                      <div
                        className="flex justify-between gap-5 w-full text-right"
                        key={key}
                      >
                        <h4 className="text-gray capitalize">
                          {key.split('_').join(' ')}
                        </h4>
                        <p className="text-black-100 font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>{' '}
      </Dialog>
    </Transition>
  );
};
