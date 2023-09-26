import React, { FC, useState, useEffect } from 'react';

import classes from './Home.module.css';
import { BarChart } from '../../components/';
import { getLaunches, setFormatData } from '../../services';

const Home: FC = (): JSX.Element => {
  const [launches, setlaunches] = useState([]);

  const fetchData = async () => {
    const data = await getLaunches();
    setlaunches(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.container}>
      <BarChart data={setFormatData(launches)} />
    </div>
  );
};

export default Home;
