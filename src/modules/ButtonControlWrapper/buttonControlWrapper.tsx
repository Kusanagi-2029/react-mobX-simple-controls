import React from 'react';
import styles from './buttonControlWrapper.module.css';
import useDeviceDetect from '../../shared/hooks/useDeviceDetect';
import ButtonControlContainer from './components/ButtonControl';
import Title from '../../shared/_ui_/TitleBlock/TitleBlock';

const ButtonControlWrapper: React.FC = () => {
  const isMobile = useDeviceDetect();

  return (
    <div
      className={
        isMobile
          ? styles.buttonControlWrapperMobile
          : styles.buttonControlWrapper
      }
    >
      <Title text="Контрол с кнопками" isMobile={isMobile} />
      {/* Контрол с двумя кнопками справа */}
      <ButtonControlContainer
        buttons={[
          {
            text: 'Очистить',
            position: 'right',
            actionType: 'clear',
          },
          {
            text: 'Hello world!',
            position: 'right',
            actionType: 'helloWorld',
          },
        ]}
      />
      {/* Контрол с одной кнопкой справа и одной слева */}
      <ButtonControlContainer
        buttons={[
          {
            text: 'Проверить число',
            position: 'left',
            actionType: 'checkNumber',
          },
          {
            text: 'Показать alert',
            position: 'right',
            actionType: 'showAlert',
          },
        ]}
      />
    </div>
  );
};

export default ButtonControlWrapper;
