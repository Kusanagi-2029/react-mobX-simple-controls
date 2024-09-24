import React from 'react';
import DebouncedInput from '../../../../shared/_ui_/DebouncedInput/DebouncedInput';
import useDeviceDetect from '../../../../shared/hooks/useDeviceDetect';
import styles from './buttonControl.module.css';
import {
  IButtonProps,
  IButtonControlProps,
} from '../../_types/interfaces';

/**
  Вспомогательная функция для получения состояния кнопки
*/
const getButtonProps = (button: IButtonProps, inputValue: string) => {
  const isNumber = !isNaN(Number(inputValue)); // Проверяем, является ли значение числом
  const isDisabled =
    (button.actionType === 'checkNumber' && !isNumber) || // Отключаем кнопку, если кнопка "Проверить число", а значение не число
    ((button.actionType === 'showAlert' ||
      button.actionType === 'checkNumber') &&
      inputValue.trim() === ''); // Отключаем кнопку, если "Показать Alert", а поле пустое

  return {
    isDisabled,
    className: `${styles.button} ${
      isDisabled ? styles.disabled : ''
    }`,
  };
};

const ButtonControl: React.FC<IButtonControlProps> = ({
  buttons,
  inputValue,
  onInputChange,
  onButtonClick,
  isDebounced,
  debounceTime,
}) => {
  const isMobile = useDeviceDetect();

  return (
    <div
      className={
        isMobile
          ? styles.buttonContainerMobile
          : styles.buttonContainer
      }
    >
      <div
        className={
          isMobile ? styles.buttonControlMobile : styles.buttonControl
        }
      >
        {buttons
          .filter(button => button.position === 'left')
          .map((button, index) => {
            const { isDisabled, className } = getButtonProps(
              button,
              inputValue,
            );

            return (
              <button
                key={index}
                onClick={() =>
                  !isDisabled && onButtonClick(button.actionType)
                } // Не вызываем onButtonClick, если кнопка отключена
                className={`${className} ${
                  isMobile
                    ? styles.mobileButton
                    : styles.desktopButton
                }`}
                disabled={isDisabled}
              >
                {button.text}
              </button>
            );
          })}

        <DebouncedInput
          value={inputValue}
          onChange={onInputChange}
          isDebounced={isDebounced}
          debounceTime={debounceTime}
        />

        {buttons
          .filter(button => button.position === 'right')
          .map((button, index) => {
            const { isDisabled, className } = getButtonProps(
              button,
              inputValue,
            );

            return (
              <button
                key={index}
                onClick={() =>
                  !isDisabled && onButtonClick(button.actionType)
                } // Не вызываем onButtonClick, если кнопка отключена
                className={`${className} ${
                  isMobile
                    ? styles.mobileButton
                    : styles.desktopButton
                }`}
                disabled={isDisabled}
              >
                {button.text}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default ButtonControl;
