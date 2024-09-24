import { ICountry } from '../_types/interfaces';

export const getUniqueSuggestions = (
  suggestions: ICountry[],
): string[] => {
  return [...new Set(suggestions.map(country => country.name))];
};
