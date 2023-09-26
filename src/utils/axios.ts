import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://api.spacexdata.com/v4',
});

export { customFetch };
