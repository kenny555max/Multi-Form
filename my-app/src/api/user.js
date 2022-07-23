import axios from 'axios';

// const url = "http://localhost:5000/users";
const url = "https://memoriesappbykenny.herokuapp.com/users";

export const insertUsers = (data) => axios.post(url, data);