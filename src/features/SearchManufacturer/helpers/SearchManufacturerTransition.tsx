import { Transition } from '@headlessui/react'
import React from 'react'

interface ManufacturerTransition {
  children: React.ReactNode
  resetValue: () => void
}

export const ManufacturerTransition: React.FC<ManufacturerTransition> = ({ children, resetValue }) => {
  return (
    <Transition
      leave="transtion ease-in-out duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      afterLeave={resetValue}
    >
      {children}
    </Transition>
  )
}
