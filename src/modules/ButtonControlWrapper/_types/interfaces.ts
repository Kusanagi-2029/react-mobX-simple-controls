export interface IButtonProps {
  text: string;
  position: 'left' | 'right';
  actionType: 'clear' | 'helloWorld' | 'checkNumber' | 'showAlert';
}

export interface IButtonControlProps {
  buttons: IButtonProps[];
  inputValue: string;
  onInputChange: (value: string) => void;
  onButtonClick: (actionType: string) => void;
  isDebounced?: boolean;
  debounceTime?: number;
}

export interface IButtonControlContainerProps {
  buttons: IButtonProps[];
}
