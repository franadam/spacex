import { IGraphFormat } from '../interfaces';

const setFormatData = (data: any[], filter: string = 'date_utc') => {
  const dateCountMap: Map<string, number> = new Map();

  data.forEach((item) => {
    const year = new Date(item[filter]).getUTCFullYear().toString();

    dateCountMap.set(year, (dateCountMap.get(year) || 0) + 1);
  });

  const result: IGraphFormat[] = [];
  dateCountMap.forEach((value, key) => {
    result.push({ name: key, value: value });
  });

  console.log('result', result);
  return result;
};

export { setFormatData };
