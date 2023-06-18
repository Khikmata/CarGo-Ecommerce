export const filterManufacturerByQuery = (manufacturers: string[], query: string) => {
  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((manftr) =>
          manftr.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
        )
  return filteredManufacturers
}
