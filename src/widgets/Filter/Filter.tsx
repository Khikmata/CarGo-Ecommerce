'use client';

import { FilterDropdown } from '@/features';
import { fuels, yearsOfProduction } from '@/shared/constants';

export const Filter = () => {
  return (
    <div className="home__filter-container">
      <FilterDropdown title="fuel" options={fuels} />
      <FilterDropdown title="year" options={yearsOfProduction} />
    </div>
  );
};
