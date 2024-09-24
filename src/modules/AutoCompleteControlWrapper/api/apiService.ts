import { ICountry } from '../_types/interfaces';
import countries from './_mock_/countries.json';

export function getCountryByName(
  countryName: string,
): Promise<ICountry[]> {
  return new Promise(resolve => {
    setTimeout(resolve, getRandom(100, 800));
  }).then(() => {
    if (!countryName) return [];

    const searchText = countryName.toLowerCase();
    return countries.filter(
      x =>
        x.name.toLowerCase().startsWith(searchText) ||
        x.fullName.toLowerCase().startsWith(searchText),
    );
  });
}

function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
