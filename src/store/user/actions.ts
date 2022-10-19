import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import apiCall from "../../services/apiCall";
import setAuthToken from "../../utils/setAuthToken";
import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_ERROR, SET_CURRENT_USER, REGISTER } from "./action-types";
import { Dispatch } from "redux";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

export function login(token: string) {
  // return apiCall.post("login", name);
  return {
    type: LOGIN_SUCCESS,
    payload: { token }
  };
}


// export function login(data: any) {
//   const navigate = useNavigate();
//   const dispatch: Dispatch<any> = useDispatch();

//   // return apiCall.post("login", name);
//   apiCall.post("/users/login", data).then(res => {
//     console.log(res);
//     const { token } = res.data;
//     sessionStorage.setItem('token', token);
//     setAuthToken(token);
//     const decoded = jwt_decode(token);
//     // dispatch(login(token))
//     dispatch(setCurrentUser(decoded));
//     // navigate('/first');
//   }).catch(e => {
//     const { errors } = e?.response?.data;
//     alert(errors);
//     console.log(e);
//   });
//   // return {
//   //   type: LOGIN_SUCCESS,
//   //   payload: { token }
//   // };
// }

// Set logged in user
export const setCurrentUser = (decoded: any) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => {
  // Remove token from local storage
  sessionStorage.removeItem("token");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  return {
    type: SET_CURRENT_USER,
    payload: {}
  };
  // setCurrentUser({});
};


export function register() {
  // return apiCall.post("login", name);
  return {
    type: REGISTER,
    payload: {}
  };
}




