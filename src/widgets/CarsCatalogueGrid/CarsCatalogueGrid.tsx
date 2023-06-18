import { CarCard } from '@/entities'
import { ICar } from '@/shared/types'
import { CarDataEmptyCheck } from './helpers/CarDataEmptyCheck'

export const CarsCatalogueGrid = ({ carData }: { carData: ICar[] }) => {
  return (
    <>
      {carData && !CarDataEmptyCheck(carData) ? (
        <section className="min-[1024px]:px-56 px-12">
          <div className="home__cars-wrapper">
            {carData.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">No results</h2>
        </div>
      )}
    </>
  )
}
