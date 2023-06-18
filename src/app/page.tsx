import { CarCatalogueWrapper, Hero, fetchCars } from '@/shared'
import { IFetchCarsProps } from '@/shared/types'
import { CarsCatalogueGrid, Filter, Search } from '@/widgets'

interface HomeProps {
  searchParams: IFetchCarsProps
}

export default async function Home({ searchParams }: HomeProps) {
  const { fuel, limit, model, year, make } = searchParams

  const carData = await fetchCars({
    fuel: fuel || '',
    make: make || '',
    model: model || '',
    limit: limit || 10,
    year: year || 2023,
  })
  console.log(searchParams)
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <CarCatalogueWrapper>
          <div className="home__filters">
            <Search />

            <div className="home__filter-container">
              <Filter />
            </div>
          </div>
        </CarCatalogueWrapper>
        <CarsCatalogueGrid carData={carData ? carData : []} />
      </main>
    </>
  )
}
