import React from 'react';
import { observer } from 'mobx-react-lite';
import buttonControlStore from '../../store/buttonControlStore';
import ButtonControl from './buttonControl';
import { IButtonControlContainerProps } from '../../_types/interfaces';

const ButtonControlContainer: React.FC<IButtonControlContainerProps> =
  observer(({ buttons }) => {
    const handleButtonClick = (actionType: string) => {
      switch (actionType) {
        case 'clear':
          buttonControlStore.clearInput();
          break;
        case 'helloWorld':
          buttonControlStore.setInputValue('Hello world!');
          break;
        case 'checkNumber':
          const number = parseFloat(buttonControlStore.inputValue);
          if (!isNaN(number)) alert(`Число: ${number}`);
          break;
        case 'showAlert':
          alert(buttonControlStore.inputValue);
          break;
        default:
          break;
      }
    };

    const handleInputChange = (value: string) => {
      buttonControlStore.setInputValue(value);
    };

    return (
      <ButtonControl
        buttons={buttons}
        inputValue={buttonControlStore.inputValue}
        onInputChange={handleInputChange}
        onButtonClick={handleButtonClick}
        isDebounced={false}
      />
    );
  });

export default ButtonControlContainer;
