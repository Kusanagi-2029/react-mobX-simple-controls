import React, { useEffect, useState, useCallback } from 'react';
import { debounce } from '../../utils/debounce';
import styles from './DebouncedInput.module.css';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { IDebouncedInputProps } from '../_types_/sharedUI.types';

const DebouncedInput: React.FC<IDebouncedInputProps> = ({
  value,
  onChange,
  isDebounced,
  debounceTime,
}) => {
  const isMobile = useDeviceDetect();

  const [inputValue, setInputValue] = useState(value);

  const debouncedOnChange = useCallback(
    debounce((newValue: string) => {
      onChange(newValue);
    }, debounceTime),
    [onChange, debounceTime],
  );

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (isDebounced) {
      debouncedOnChange(newValue);
    } else {
      onChange(newValue);
    }
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      className={
        isMobile ? styles.debouncedInputMobile : styles.debouncedInput
      }
    />
  );
};

export default DebouncedInput;
