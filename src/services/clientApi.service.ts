import { customFetch } from '../utils/axios';

const getCompanyInfo = async () => {
  try {
    const res = await customFetch.get('/company');
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};

const getLaunches = async () => {
  const response = await customFetch.get('/launches');
  const data = response.data;
  console.log('data', data);
  return data;
};

export { getCompanyInfo, getLaunches };
