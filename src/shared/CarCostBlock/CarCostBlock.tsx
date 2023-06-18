import { calculateCarRent } from '../utils/CarDefinePrice';
import { ICar } from '../types';

export const CarCostBlock = ({ city_mpg, year }: Partial<ICar>) => {
  let carRentCost = 'out of stock';

  if (city_mpg && year) {
    carRentCost = calculateCarRent(city_mpg, year);
  }

  return (
    <p className="flex mt-6 text-[32px] font-extrabold">
      <span className="self-start text=[14px] font-semibold">$</span>
      {carRentCost}
      <span className="self-end text=[14px] font-semibold">/day</span>
    </p>
  );
};
