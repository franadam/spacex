import React, { FC } from 'react';

import classes from './Footer.module.css';

const Footer: FC = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <p>
        &copy; {new Date().getFullYear()}
        <span> SpaceXLauncher </span>
        <br />
        All rights reserved
      </p>
    </div>
  );
};

export default Footer;
