import React, { FC } from 'react';

import { Footer, Navbar } from '../components';
import classes from './MainLayout.module.css';

interface Props {
  children: JSX.Element;
}

const MainLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.wrapper}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
