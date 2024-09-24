import React, { useEffect } from 'react';
import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';
import { ICountry } from '../../_types/interfaces';
import { getUniqueSuggestions } from '../../helpers/getUniqueSuggestions';
import AutoCompleteControl from './autoCompleteControl';
import autoCompleteControlStore from '../../store/autoCompleteControlStore';

const AutoCompleteControlContainer: React.FC<{
  maxSuggestions: number;
  isDebounced?: boolean;
  debounceTime?: number;
}> = observer(({ maxSuggestions, isDebounced, debounceTime }) => {
  useEffect(() => {
    const disposer = autorun(() => {
      autoCompleteControlStore.fetchSuggestions();
    });

    // Очищаем autorun при размонтировании компонента
    return () => disposer();
  }, []);

  const uniqueSuggestions = getUniqueSuggestions(
    autoCompleteControlStore.suggestions,
  )
    .map(name =>
      autoCompleteControlStore.suggestions.find(
        country => country.name === name,
      ),
    )
    .filter((country): country is ICountry => country !== undefined);

  const handleInputChange = (value: string) => {
    autoCompleteControlStore.setInputValue(value);
  };

  const handleSuggestionClick = (name: string) => {
    autoCompleteControlStore.setInputValue(name);
  };

  return (
    <AutoCompleteControl
      inputValue={autoCompleteControlStore.inputValue}
      uniqueSuggestions={uniqueSuggestions}
      maxSuggestions={maxSuggestions}
      onInputChange={handleInputChange}
      onSuggestionClick={handleSuggestionClick}
      isDebounced={isDebounced}
      debounceTime={debounceTime}
    />
  );
});

export default AutoCompleteControlContainer;
