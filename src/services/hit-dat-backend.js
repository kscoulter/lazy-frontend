import axios from 'axios';

const API_URL = 'http://localhost:8080/';

export default function callApi(endpoint, method = 'get', data) {
  return axios({
    baseURL: API_URL,
    method: method,
    url: endpoint,
    data: data,
  })
  .then( (response) => {
    return response.data;
  })
  .catch( (err) => {
    return err.response.data;
  });
}
