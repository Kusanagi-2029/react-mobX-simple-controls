import React from 'react';
import styles from './autoCompleteControlWrapper.module.css';
import useDeviceDetect from '../../shared/hooks/useDeviceDetect';
import AutoCompleteControlContainer from './components/AutoCompleteControl';
import Title from '../../shared/_ui_/TitleBlock/TitleBlock';

const AutoCompleteControlWrapper: React.FC = () => {
  const isMobile = useDeviceDetect();

  return (
    <>
      <Title text="Контрол-автокомплит" isMobile={isMobile} />
      <div
        className={
          isMobile
            ? styles.autoCompleteControlWrapperMobile
            : styles.autoCompleteControlWrapper
        }
      >
        <div
          className={
            isMobile
              ? styles.autoCompleteControlDebouncedMobile
              : styles.autoCompleteControlDebounced
          }
        >
          <h2>Контрол-автокомплит с Debounce'ом</h2>
          <h3>Автокомплит, макс. подсказок - 3</h3>
          {/* Автокомплит с максимальным количеством подсказок - 3 */}
          <AutoCompleteControlContainer
            maxSuggestions={3}
            isDebounced={true}
            debounceTime={1000}
          />

          <h3>Автокомплит, макс. подсказок - 10</h3>
          {/* Автокомплит с максимальным количеством подсказок - 10 */}
          <AutoCompleteControlContainer
            maxSuggestions={10}
            isDebounced={true}
            debounceTime={1000}
          />
        </div>
        <div
          className={
            isMobile
              ? styles.autoCompleteControlMobile
              : styles.autoCompleteControl
          }
        >
          <h2>Контрол-автокомплит без Debounce'а</h2>
          <h3>Автокомплит, макс. подсказок - 3</h3>
          <AutoCompleteControlContainer
            maxSuggestions={3}
            isDebounced={false}
          />
          <h3>Автокомплит, макс. подсказок - 10</h3>
          <AutoCompleteControlContainer
            maxSuggestions={10}
            isDebounced={false}
          />
        </div>
      </div>
    </>
  );
};

export default AutoCompleteControlWrapper;
