import axios from 'axios'

const BASE_URL="http://localhost:5000/api"
// const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTM0YWUyOWI0MDE4NWIzYjM1NGUzNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDAxNjU1NjgsImV4cCI6MTY0MDQyNDc2OH0.KXz8tXnC4n3lhgNDAGP4ALDtf91MlB_hIpJMVxXsWV0"
// const TOKEN=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;


export const publicRequest=axios.create({
    baseURL: BASE_URL
});


export const userRequest=axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
});