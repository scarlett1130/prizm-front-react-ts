import { SignActionTypes, LOGIN_REQUEST, LOGIN_SUCCESS, SET_CURRENT_USER, LOGIN_ERROR, REGISTER } from "./action-types";
import jwt_decode from "jwt-decode";
// import isEmpty  from "is-empty";
const isEmpty = require("is-empty");

const initialState: UserState = {
  userInfo: {
    name: "",
    // password: "",
    email: "",
    isLogin: false,
  },
  isAuthenticated: false,
  loading: false
};

export function userReducer(state = initialState, action: SignActionTypes): UserState {
  switch (action.type) {
    case LOGIN_REQUEST: {
      const userInfo = { ...state.userInfo };
      userInfo.isLogin = false;
      return {
        ...state,
        userInfo
      };
    }
    case LOGIN_SUCCESS: {
      const { token } = action.payload;

      const userInfo = { ...state.userInfo };
      let isAuthenticated = state.isAuthenticated;
      const decode: any = jwt_decode(token);
      console.log(decode);
      userInfo.name = decode.name;
      userInfo.email = decode.email;
      userInfo.isLogin = true;
      sessionStorage.setItem('token', token);
      isAuthenticated = true;
      return {
        ...state,
        userInfo,
        isAuthenticated
      };

    }

    case SET_CURRENT_USER: {

      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        userInfo: action.payload
      };

    }

    case LOGIN_ERROR: {
      const { error } = action.payload;
      const userInfo = { ...state.userInfo };
      userInfo.isLogin = false;
      return {
        ...state,
        userInfo
      };
    }

    default:
      return { ...state };
  }
}
