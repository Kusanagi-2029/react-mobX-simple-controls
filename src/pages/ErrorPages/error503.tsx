import { ReactComponent as SyntellectIcon } from '../../shared/svg/Syntellect.svg';
import { useNavigate } from 'react-router-dom';
import styles from './error.module.css';
import NavButton from '../../shared/_ui_/NavButtons/NavButton/NavButton';
import Title from '../../shared/_ui_/TitleBlock/TitleBlock';
import useDeviceDetect from '../../shared/hooks/useDeviceDetect';

const Error503 = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const isMobile = useDeviceDetect();

  return (
    <div
      className={
        isMobile ? styles.errorContainer : styles.errorContainerMobile
      }
    >
      <div
        className={
          isMobile ? styles.errorHeader : styles.errorHeaderMobile
        }
      >
        <Title text="Ошибка 503" isMobile={isMobile} />
        {/* При её наличии: */}
        <h2>Сетевая ошибка</h2>
      </div>
      <div className={isMobile ? styles.error : styles.errorMobile}>
        <SyntellectIcon />
      </div>
      <NavButton
        text="На Главную"
        isErrorPage={true}
        onClick={() => handleNavigate('/')}
      />
    </div>
  );
};

export default Error503;
