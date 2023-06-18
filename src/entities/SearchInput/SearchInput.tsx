import { Combobox } from '@headlessui/react'

import Image from 'next/image'
import React from 'react'

interface SearchInputProps {
  handleComboboxInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  styles: string
  placeholder: string
  carSrc: string
}

export const SearchInput: React.FC<SearchInputProps> = ({ handleComboboxInput, carSrc, placeholder, styles }) => {
  return (
    <>
      <Combobox.Button className="absolute top-[14px]">
        <Image src={carSrc} width={20} height={20} className="ml-4" alt="car logo" />
      </Combobox.Button>
      <Combobox.Input
        className={`${styles}`}
        displayValue={(item: string) => item}
        onChange={handleComboboxInput}
        placeholder={placeholder}
      />
    </>
  )
}
