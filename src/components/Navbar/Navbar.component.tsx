import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

const Navbar: FC = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <Link to={'/'} className={classes['logo-container']}>
        <img src={'./spacex.png'} className={classes.logo} alt="logo" />
      </Link>
      <div className={classes['btn-container']}>
        <Link to={'/missions'} className={classes.link}>
          Missions
        </Link>
        <Link to={'/rockets'} className={classes.link}>
          Rockets
        </Link>
        <Link to={'/about'} className={classes.link}>
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
