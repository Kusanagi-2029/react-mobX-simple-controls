import React from 'react';

import styles from './NavButton.module.css';
import { INavButtonProps } from '../../_types_/sharedUI.types';

/**
 * Компонент кнопки для навигации
 */
const NavButton: React.FC<INavButtonProps> = ({
  isErrorPage,
  text,
  onClick,
}) => {
  return (
    <button
      className={isErrorPage ? styles.errorButton : styles.button}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default NavButton;
