import React from 'react';
import { ITitleProps } from '../_types_/sharedUI.types';
import styles from './TitleBlock.module.css';

/**
 * Компонент Оглавления страницы
 */
const Title: React.FC<ITitleProps> = ({ isMobile, text }) => {
  return (
    <h1 className={!isMobile ? styles.title : styles.titleMobile}>
      <div
        className={
          !isMobile ? styles.gradientBar : styles.gradientBarMobile
        }
      />
      <div
        className={
          !isMobile ? styles.titleText : styles.titleTextMobile
        }
      >
        {text}
      </div>
    </h1>
  );
};

export default Title;
