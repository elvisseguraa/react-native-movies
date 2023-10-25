import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'MI_API_KEY',
        language: 'es-ES'
    }
});

export default movieDB;
