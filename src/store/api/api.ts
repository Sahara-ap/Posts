import axios from 'axios';

export const jsonApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  responseType: 'json',
  headers: {
    "Content-Type": 'application/json; charset=UTF-8',
  }
});

