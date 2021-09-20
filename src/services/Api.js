import axios from 'axios';

const Api = (searchQuery, page = 1) => {
  const URL = 'https://pixabay.com/api/';
  const KEY = '22621457-97768c9c560d75cc7e8f91d42';
  return axios
    .get(`${URL}?key=${KEY}&per_page=12&page=${page}&q=${searchQuery}`)
    .then(res => res.data);
};

export default Api;