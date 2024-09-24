import React from 'react';
import { INavButtonContainerProps } from '../_types_/sharedUI.types';
import NavButton from './NavButton/NavButton';
import styles from './NavButtonContainer.module.css';

/**
 * Компонент контейнера кнопок для навигации
 */
const NavButtonContainer: React.FC<INavButtonContainerProps> = ({
  isMobile,
  onNavigate,
}) => {
  return (
    <div
      className={
        isMobile
          ? styles.buttonContainerMobile
          : styles.buttonContainer
      }
    >
      <NavButton
        text="На Error404"
        onClick={() => onNavigate('/error404')}
      />
      <NavButton
        text="Не найдено"
        onClick={() => onNavigate('/123456789qwerty')}
      />
      <NavButton
        text="На Error503"
        onClick={() => onNavigate('/error503')}
      />
    </div>
  );
};

export default NavButtonContainer;
