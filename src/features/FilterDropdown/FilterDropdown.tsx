'use client'

import { IFilterOptions } from '@/shared/types'
import { UpdateSearchUrl } from '@/shared/utils/UpdateSearchUrl'
import { Listbox, Transition } from '@headlessui/react'
import chevronIcon from '@images/chevron-up-down.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
interface IFilterDropdownProps {
  title: 'fuel' | 'year'
  options: IFilterOptions[]
}

export const FilterDropdown: React.FC<IFilterDropdownProps> = ({ title, options }) => {
  const router = useRouter()
  const [selected, setSelected] = useState(options[0])
  const handleListboxChange = (e: { title: string; value: string }) => {
    setSelected(e)
    handleSearchUrl(e)
  }

  const handleSearchUrl = (e: { title: string; value: string }) => {
    const newPathname = UpdateSearchUrl(title, e.value.toLowerCase())
    router.push(newPathname)
  }

  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={handleListboxChange}>
        <div className="relative w-fit z-10">
          <Listbox.Button className={'custom-filter__btn'}>
            <span>{selected.title}</span>
            <Image src={chevronIcon} width={20} height={20} className="ml-4 object-contain" alt="chevron up down" />
          </Listbox.Button>
          <Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? 'bg-primary-blue text-white' : 'text-gray-900'
                    }`
                  }
                >
                  {({ selected }) => (
                    <span className={`block truncate ${selected ? 'font-bold' : 'font-normal'}`}>{option.title}</span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
