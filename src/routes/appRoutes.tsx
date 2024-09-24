import React from 'react';
import Error404 from '../pages/ErrorPages/error404';
import Error503 from '../pages/ErrorPages/error503';
import ErrorNotResponding from '../pages/ErrorPages/error503';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/mainPage';

/**
 * Компонент роутов приложения
 */
const AppRoutes = () => {
  return (
    <Routes>
      {/* Перенаправление на страницу ошибки при наличии ошибки */}
      <Route path="/error404" element={<Error404 />} />
      <Route path="/error503" element={<Error503 />} />
      <Route path="*" element={<Error404 />} />
      <Route
        path="/error_not_responding"
        element={<ErrorNotResponding />}
      />
      <Route path="/" element={<MainPage />}>
        <Route index element={<MainPage />} />
        <Route path="main" element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
