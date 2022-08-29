import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_ERROR, REGISTER } from "./action-types";

export function login(token: string) {
  // return apiCall.post("login", name);
  return {
    type: LOGIN_SUCCESS,
    payload: { token }
  };
}

export function register() {
  // return apiCall.post("login", name);
  return {
    type: REGISTER,
    payload: {}
  };
}




