import React, { FC } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import { About, Home, Mission } from '../../pages';
import MainLayout from '../../hoc/MainLayout.hoc';

const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missions" element={<Mission />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
