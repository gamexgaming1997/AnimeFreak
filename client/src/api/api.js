import axios from 'axios';

export const baseAPI = axios.create({ baseURL: 'https://api.jikan.moe/v4/anime' });