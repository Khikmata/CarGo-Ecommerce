import { ShowMore } from '@/features';
import { CarCatalogueWrapper, Hero, fetchCars } from '@/shared';
import { CarsCatalogueGrid } from '@/shared/CarsCatalogueGrid/CarsCatalogueGrid';
import { IFetchCarsProps } from '@/shared/types';
import { Filter, Search } from '@/widgets';

interface HomeProps {
  searchParams: IFetchCarsProps;
}

export default async function Home({ searchParams }: HomeProps) {
  const { fuel, limit = 10, model, year, make } = searchParams;

  const carData = await fetchCars({
    fuel: fuel || '',
    make: make || '',
    model: model || '',
    limit: limit || 10,
    year: year || 2023
  });

  console.log('limit:' + limit, 'carData length:' + carData?.length);

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
        <CarsCatalogueGrid carData={carData ? carData : []}>
          {carData && (
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              nextPage={limit <= carData.length}
            />
          )}
        </CarsCatalogueGrid>
      </main>
    </>
  );
}
