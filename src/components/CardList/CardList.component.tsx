import React, { FC } from 'react';

import { IMission } from '../../interfaces/';
import classes from './CardList.module.css';
import Card from '../Card/Card.component';

interface Props {
  items: IMission[];
}

const CardList: FC<Props> = ({ items }): JSX.Element => {
  return (
    <div className={classes.container}>
      {items.map((item) => (
        <Card key={item.name} {...item} />
      ))}
    </div>
  );
};

export default CardList;
