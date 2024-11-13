import axios from 'axios';

const BASE_URL = 'http://localhost:7000/api/v1/transactions';

export const fetchTransactions = (month, search = '', page = 1, size = 3) =>
    axios.get(`${BASE_URL}`, {
        params: { month, search, page, size },
    });

export const fetchStatistics = (month) =>
    axios.get(`${BASE_URL}/statistics`, { params: { month } });

export const fetchPriceRangeData = (month) =>
    axios.get(`${BASE_URL}/bar-chart`, { params: { month } });

export const fetchCategoryData = (month) =>
    axios.get(`${BASE_URL}/pie-chart`, { params: { month } });

export const fetchCombinedData = (month) =>
    axios.get(`${BASE_URL}/combined-data`, { params: { month } });
