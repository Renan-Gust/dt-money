import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://web-dt-money.vercel.app'
});
