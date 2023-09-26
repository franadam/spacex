import React, { FC } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { IGraphFormat } from '../../interfaces';

interface Props {
  data: IGraphFormat[];
}

const BarChartComponent: FC<Props> = ({ data }): JSX.Element => {
  return (
    <ResponsiveContainer width="80%" height={300}>
      <BarChart width={730} height={250} data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3 " />
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="value" fill="#3bf67d" barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
