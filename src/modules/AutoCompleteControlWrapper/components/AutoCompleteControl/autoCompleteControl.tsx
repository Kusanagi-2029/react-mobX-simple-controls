import React from 'react';
import DebouncedInput from '../../../../shared/_ui_/DebouncedInput/DebouncedInput';
import useDeviceDetect from '../../../../shared/hooks/useDeviceDetect';
import styles from './autoCompleteControl.module.css';
import { IAutoCompleteControlProps } from '../../_types/interfaces';

const AutoCompleteControl: React.FC<IAutoCompleteControlProps> = ({
  inputValue,
  uniqueSuggestions,
  maxSuggestions,
  onInputChange,
  onSuggestionClick,
  isDebounced,
  debounceTime,
}) => {
  const isMobile = useDeviceDetect();

  return (
    <div
      className={
        isMobile
          ? styles.autoCompleteContainerMobile
          : styles.autoCompleteContainer
      }
    >
      <DebouncedInput
        value={inputValue}
        onChange={onInputChange}
        isDebounced={isDebounced}
        debounceTime={debounceTime}
      />
      <ul
        className={
          isMobile
            ? styles.suggestionsListMobile
            : styles.suggestionsList
        }
      >
        {uniqueSuggestions
          .slice(0, maxSuggestions)
          .map((country, index) => (
            <li
              key={index}
              onClick={() => onSuggestionClick(country.name)}
              className={
                isMobile
                  ? styles.suggestionItemMobile
                  : styles.suggestionItem
              }
            >
              <img src={country.flag} alt={`${country.name} flag`} />
              {country.name} - {country.fullName}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AutoCompleteControl;
