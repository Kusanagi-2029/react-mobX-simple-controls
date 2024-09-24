export interface ICountry {
  name: string;
  fullName: string;
  flag: string;
}

export interface IAutoCompleteControlProps {
  inputValue: string;
  uniqueSuggestions: ICountry[];
  maxSuggestions: number;
  onInputChange: (value: string) => void;
  onSuggestionClick: (name: string) => void;
  isDebounced?: boolean;
  debounceTime?: number;
}
