import React, { FC } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { Home } from '../../pages';
import MainLayout from '../../hoc/MainLayout.hoc';

const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
