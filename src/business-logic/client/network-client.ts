import axios, { AxiosInstance } from 'axios';
import { ENVIRONMENTS } from '../constants/environments';

const baseURL = ENVIRONMENTS.serverURL

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

export const networkClient = {
    ...axiosInstance,
    defaults: axiosInstance.defaults,
    get: axiosInstance.get.bind(axiosInstance),
} as AxiosInstance