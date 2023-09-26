import React, { FC, useState, useEffect } from 'react';

import classes from './Mission.module.css';
import { CardList } from '../../components/';
import { getLaunches } from '../../services';
import { IMission } from '../../interfaces';

const Mission: FC = (): JSX.Element => {
  const [launches, setlaunches] = useState<IMission[]>([]);

  const fetchData = async () => {
    const data = await getLaunches();
    if (data) setlaunches(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.container}>
      <CardList items={launches.slice(-20)} />
    </div>
  );
};

export default Mission;
