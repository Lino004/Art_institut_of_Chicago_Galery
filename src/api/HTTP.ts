import axios from 'axios';

const HTTP = axios.create({
  baseURL: 'https://api.artic.edu/api/v1/',
});

export default HTTP;
