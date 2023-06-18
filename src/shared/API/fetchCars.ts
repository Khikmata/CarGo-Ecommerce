import axios from 'axios'
import { ICar, IFetchCarsProps } from '../types'

export async function fetchCars(params: IFetchCarsProps) {
  const { limit, make, model, year, fuel } = params

  console.log('manufacturer: ', make)
  console.log('model: ', model)
  try {
    const headers = {
      'X-RapidAPI-Key': '7fffaf3971msha211b1fab9cd4f6p17b564jsn434f89a37eac',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    }
    const URL = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&year=${year}&model=${model}&fuel_type=${fuel}&limit=${limit}`
    console.log(URL)
    const response = await axios.get<ICar[]>(URL, {
      headers: headers,
      url: URL,
    })

    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getCarImage = (car: ICar, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage')
  const { make, year, model } = car

  url.searchParams.append('customer', 'hrjavascript-mastery')
  url.searchParams.append('make', make)
  url.searchParams.append('modelFamily', model.split(' ')[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('modelYear', `${year}`)
  if (angle) {
    url.searchParams.append('angle', `${angle}`)
  }

  return `${url}`
}
