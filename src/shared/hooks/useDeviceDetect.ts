import { useEffect, useState } from 'react';

/**
 * Хук для определения типа устройства (мобильное/десктоп)
 */
const useDeviceDetect = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(
        userAgent,
      );
    const mobile = isMobileDevice || window.innerWidth < 840; // Определяем мобильное устройство по ширине экрана и user agent
    setIsMobile(mobile);
  };

  useEffect(() => {
    handleResize(); // Проверяем при первом рендере
    window.addEventListener('resize', handleResize); // Добавляем обработчик события изменения размера окна

    return () => {
      window.removeEventListener('resize', handleResize); // Убираем обработчик при размонтировании
    };
  }, []);

  return isMobile;
};

export default useDeviceDetect;
