import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';
import { SiSpacex } from 'react-icons/si';

import classes from './About.module.css';
import { getCompanyInfo } from '../../services/clientApi.service';
import { ICompany } from '../../interfaces';

const About: FC = (): JSX.Element => {
  const [info, setInfo] = useState<ICompany | undefined>();

  const fetchData = async () => {
    const data = await getCompanyInfo();
    setInfo(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes['logo-container']}>
        <img src={'./launch.avif'} alt="logo" className={classes.logo} />
      </div>
      <h2 className={classes.title}>Our story</h2>
      <div>
        <p>{info?.summary}</p>
        <h3 className={classes.title}>Key information</h3>
        <p>
          <span className={classes.label}>CEO : </span>
          {info?.ceo}
        </p>

        <p>
          <span className={classes.label}>number of employees : </span>
          {info?.employees}
        </p>
        <p>
          <span className={classes.label}>number of launch sites : </span>
          {info?.launch_sites}
        </p>
        <p>
          <span className={classes.label}>valuation : </span>
          {info?.valuation}$
        </p>
      </div>
      <div>
        <h3>Contact us</h3>
        {info && (
          <div className={classes.links}>
            <Link to={info.links.twitter}>
              <FaTwitter />
            </Link>
            <Link to={info.links.website}>
              <SiSpacex className={classes.icon} />
            </Link>
            <Link to={info.links.elon_twitter}>
              <FaTwitter />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
