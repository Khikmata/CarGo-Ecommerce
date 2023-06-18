'use client';

import { filterManufacturerByQuery } from '@/features/SearchManufacturer/model/filterManufacturerByQuery';
import { Combobox } from '@headlessui/react';

interface SearchManufacturerDropdownProps {
  query: string;
  manufacturers: string[];
}

export const SearchManufacturerDropdown = ({
  query,
  manufacturers
}: SearchManufacturerDropdownProps) => {
  const filteredManufacturers = filterManufacturerByQuery(manufacturers, query);
  return (
    <Combobox.Options
      className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      static
    >
      {filteredManufacturers.map((item: string) => (
        <Combobox.Option
          key={item}
          value={item}
          className={({ active }) =>
            `relative search-manufacturer__option ${
              active ? 'bg-primary-blue text-white' : 'text-gray-900'
            }`
          }
        >
          {({ selected, active }) => (
            <>
              <span
                className={`block truncate ${
                  selected ? 'font-medium' : 'font-normal'
                }`}
              >
                {item}
              </span>
              {selected && (
                <span
                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                    active ? 'text-white' : 'text-teal-600'
                  }`}
                ></span>
              )}
            </>
          )}
        </Combobox.Option>
      ))}
    </Combobox.Options>
  );
};
