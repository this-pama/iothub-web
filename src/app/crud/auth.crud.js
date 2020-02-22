import axios from "axios";

// export const LOGIN_URL = "api/auth/login";
export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";

export const ME_URL = "https://artered.herokuapp.com/v1/account/";
export const USER_URL = "https://iot-hub-lora.herokuapp.com/v1/user/byAccountId/";
export const apiUrl = "https://iot-hub-lora.herokuapp.com/v1/";
export const REGISTER_URL = apiUrl + "account/register";
export const LOGIN_URL = "https://iot-hub-lora.herokuapp.com/v1/account/login"

export function login(email, password) {
  return axios.post(LOGIN_URL, { email, password });
}

export function register(email, firstName, lastName, telephone, password) {
  return axios.post(REGISTER_URL, { email, firstName, lastName, telephone, password });
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
