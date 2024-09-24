/**
 * Интерфейс для компонента Контейнера Навигационных кнопок
 */
export interface INavButtonContainerProps {
  isMobile?: boolean;
  onNavigate: (path: string) => void;
}

/**
 * Интерфейс для компонента Навигационной кнопки
 */
export interface INavButtonProps {
  isErrorPage?: boolean;
  text: string;
  onClick: () => void;
}

/**
 * Интерфейс для компонента Заголовка
 */
export interface ITitleProps {
  isMobile?: boolean;
  text: string;
}

/**
 * Интерфейс для компонента Инпут-поля с debounce
 */
export interface IDebouncedInputProps {
  value: string;
  onChange: (value: string) => void;
  isDebounced?: boolean; // должен ли быть Debounce у Input'a
  debounceTime?: number; // сам Debounce у Input'a в миллисекундах.
}
