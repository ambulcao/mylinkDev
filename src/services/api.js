import axios from 'axios';

export const key = "f43f9093943c56940f5a20b01e25c3cc3a7f7469";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;