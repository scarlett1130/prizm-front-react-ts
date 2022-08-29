import { SignActionTypes, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, REGISTER } from "./action-types";

const initialState: UserState = {
  userInfo: {
    name: "",
    // password: "",
    email: "",
    isLogin: false,
  }
};

export function userReducer(state = initialState, action: SignActionTypes): UserState {
  switch (action.type) {
    case LOGIN_REQUEST: {
      const userInfo = { ...state.userInfo };
      userInfo.isLogin = false;
      return { userInfo };
    }
    case LOGIN_SUCCESS: {
      const { token } = action.payload;

      const userInfo = { ...state.userInfo };
      // userInfo.name = token;
      // userInfo.email = email;
      userInfo.isLogin = true;
      sessionStorage.setItem('token', token);

      return { userInfo };

    }
    case LOGIN_ERROR: {
      const { error } = action.payload;
      const userInfo = { ...state.userInfo };
      userInfo.isLogin = false;
      return { userInfo };
    }

    default:
      return { ...state };
  }
}
