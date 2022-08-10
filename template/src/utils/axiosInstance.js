import axios from 'axios';
import {baseUrl} from '~/config';
import globalConfig from './global';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});
axiosInstance.interceptors.request.use(
  config => {
    // console.log('REQUEST', config);
    console.log('--------------------REQUEST--------------------');
    const token = globalConfig.getToken();
    if (token !== null && token !== '' && token !== undefined) {
      config.headers.Authorization = `Bearer ${globalConfig.getToken()}`;
    }
    return config;
  },
  err => Promise.reject(err),
);

axiosInstance.interceptors.response.use(
  response => {
    // console.log('RESPONSE', response);
    console.log('--------------------RESPONSE--------------------');
    return response;
  },
  error => {
    // console.log('RESPONSE_ERROR', error.response ? error.response : error);
    console.log(
      '--------------------RESPONSE_ERROR--------------------' + error.response
        ? error.response
        : error,
    );
    if (error.response.status === 401) {
      console.log('401 döndü');
    }
    return Promise.reject(error);
  },
);
export {axiosInstance};
