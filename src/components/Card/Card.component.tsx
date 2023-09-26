import React, { FC } from 'react';
import moment from 'moment';

import classes from './Card.module.css';
import { IMission } from '../../interfaces/';

const Card: FC<IMission> = ({
  image,
  name,
  date_utc,
  details,
  success,
  links,
}): JSX.Element => {
  const setDate = (date: string) => {
    const year = moment(date).format('DD MMMM YYYY');
    const hours = moment(date).format('LT');
    return `${year} at ${hours}`;
  };

  return (
    <div className={classes.container}>
      <div
        className={links.patch.small === null ? classes['image-container'] : ''}
      >
        <img
          src={links.patch.small || './spacex.png'}
          className={classes.image}
          alt={`${name}`}
        />
      </div>
      <div className={classes.info}>
        <h2 className={classes.name}>{name}</h2>
        <p className={classes.date_utc}>{setDate(date_utc)}</p>
        <h5 className={success ? classes.successfull : classes.failed}>
          <span className={classes.label}>status : </span>
          {success ? 'successfull' : 'failed'}
        </h5>
        {details && (
          <p className={classes.details}>
            <span className={classes.label}>details : </span>
            {details}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
