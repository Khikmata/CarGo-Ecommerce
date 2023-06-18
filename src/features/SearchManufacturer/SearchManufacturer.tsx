'use client'

import { SearchInput, SearchManufacturerDropdown } from '@/entities'
import { manufacturers } from '@/shared/constants'
import { Combobox } from '@headlessui/react'
import React, { useState } from 'react'
import { ManufacturerTransition } from './helpers/SearchManufacturerTransition'
import carLogo from '@images/car-logo.svg'
interface ISearchManufacturerProps {
  manufacturer: string
  setManufacturer: (manufacturer: string) => void
}

export const SearchManufacturer: React.FC<ISearchManufacturerProps> = ({ manufacturer, setManufacturer }) => {
  const [query, setQuery] = useState<string>('')

  const handleComboboxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const resetValue = () => {
    setQuery('')
  }

  return (
    <div className={'search-manufacturer'}>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <SearchInput
            handleComboboxInput={handleComboboxInput}
            carSrc={carLogo}
            placeholder="Volkswagen"
            styles="search-manufacturer__input"
          />
          <ManufacturerTransition resetValue={resetValue}>
            <SearchManufacturerDropdown manufacturers={manufacturers} query={query} />
          </ManufacturerTransition>
        </div>
      </Combobox>
    </div>
  )
}
