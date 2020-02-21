import axios from "axios";

export const LOGIN_URL = "api/auth/login";
export const REGISTER_URL = "api/auth/register";
export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";

export const ME_URL = "https://artered.herokuapp.com/v1/account/";
export const USER_URL = "https://artered.herokuapp.com/v1/user/byAccountId/";
export const apiUrl = "https://artered.herokuapp.com/v1/";

export const ARTE_RED_LOGIN_URL = "https://artered.herokuapp.com/v1/account/login"

export function login(email, password) {
  return axios.post(ARTE_RED_LOGIN_URL, { email, password });
}

export function register(email, fullname, username, password) {
  return axios.post(REGISTER_URL, { email, fullname, username, password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

// export function getUserByToken(id, token) {
//   // Authorization head should be fulfilled in interceptor.
//   // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   // axios.defaults.headers.post['Content-Type'] = 'application/json';
//   axios.get(ME_URL + id, { headers: {"Authorization" : `Bearer ${token}`} })
//   .then(({data}) =>{
//     console.log("account data", data)
//     return data.user
//   })
//   .catch(() =>{ return axios.get(USER_URL) })

  
// }

export function getUserByToken(id, token) {
  return axios.get(USER_URL + id)
}
