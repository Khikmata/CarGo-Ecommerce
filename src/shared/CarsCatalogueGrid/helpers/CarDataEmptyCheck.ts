import { ICar } from '@/shared/types';

export const CarDataEmptyCheck = (carData: ICar[]) => {
  const checkIfCarDataIsEmpty =
    !Array.isArray(carData) || carData.length < 1 || !carData;
  return checkIfCarDataIsEmpty;
};
