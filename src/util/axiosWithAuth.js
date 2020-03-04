  import axios from 'axios';

export const axiosWithAuth = () => {
  const token = '506eb22a9c127c3d0832aa5c46054f4db97f1856';

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    },
    // baseURL: process.env.REACT_APP_BASE_URL
  });
};