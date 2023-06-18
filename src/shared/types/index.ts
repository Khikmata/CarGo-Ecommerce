export interface ICar {
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: 'fwd' | 'rwd' | 'awd' | '4wd'
  fuel_type: 'gas' | 'diesel' | 'elictricity'
  highway_mpg: number
  make: string
  model: string
  transmition: 'a' | 'm'
  year: number
}

export interface IFetchCarsProps {
  make: string
  year: number
  fuel: string
  limit: number
  model: string
}

export interface IFilterOptions {
  title: string
  value: string
}
