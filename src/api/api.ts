import axios from 'axios';

export const $api = axios.create({
    baseURL: 'https://my-proxy-server-tmdb.onrender.com/3/authentication'
    // headers нету т.к. в моем случае у меня на прокси-сервере отправляются headers
})
