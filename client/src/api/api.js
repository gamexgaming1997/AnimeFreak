import axios from 'axios';

const baseAPI = axios.create({ baseURL: 'https://api.jikan.moe/v4/anime' });

export const findById = (mal_id) => baseAPI.get(`/${mal_id}`);

