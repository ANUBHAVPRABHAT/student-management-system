import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8080/api/student/',
  headers: {
    'Content-Type': 'application/json',
  },
});
