import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './mainPage.module.css';
import useDeviceDetect from '../../shared/hooks/useDeviceDetect';
import NavButtons from '../../shared/_ui_/NavButtons';
import ButtonControlWrapper from '../../modules/ButtonControlWrapper';
import AutoCompleteControlWrapper from '../../modules/AutoCompleteControlWrapper';

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useDeviceDetect();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div
      className={isMobile ? styles.mainPageMobile : styles.mainPage}
    >
      <NavButtons isMobile={isMobile} onNavigate={handleNavigate} />
      <ButtonControlWrapper />
      <AutoCompleteControlWrapper />
    </div>
  );
};

export default MainPage;
