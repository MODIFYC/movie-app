import axios from 'axios';

const ID_KEY = 'qiMNfCrKAD2YwpKZAnmG';
const SECRET_KEY = 'X_9ZY5oH3v';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'X-Naver-Client-Id': ID_KEY,
    'X-Naver-Client-Secret': SECRET_KEY,
  },
});

export const movieApi = {
  searchValue: (word) =>
    api.get('/v1/search/movie.json', {
      params: {
        query: word,
        display: 20,
      },
    }),
};
