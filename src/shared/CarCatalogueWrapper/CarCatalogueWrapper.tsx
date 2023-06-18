import React from 'react'

interface CarCatalogueWrapperProps {
  children: React.ReactNode
}

export const CarCatalogueWrapper: React.FC<CarCatalogueWrapperProps> = ({ children }) => {
  return (
    <div className=" mt-12 bg-clip-padding-x padding-y max-width p-12" id="discover">
      <div className="home__text-container">
        <h2 className="text-4xl font-extrabold px">Featured cars</h2>
        <p>Explore the cars</p>
      </div>
      {children}
    </div>
  )
}
