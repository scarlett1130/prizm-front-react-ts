// export interface LoginInfo {
//   account: string;
//   anchorAuth: string;
//   balance: string;
//   wax: any;
//   walletSession: any;
//   assets: any;
//   isLogin: boolean;
// }

// export interface LoginState {
//   loginInfo: LoginInfo;
// }

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const REGISTER = "REGISTER";

interface LoginRequest {
  type: typeof LOGIN_REQUEST;
  payload: {

  };
}

interface SetCurrentUser {
  type: typeof SET_CURRENT_USER;
  payload: any;
}

interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: {
    token: string
  };
}

interface LoginError {
  type: typeof LOGIN_ERROR;
  payload: {
    error: any;
  };
}

interface Register {
  type: typeof REGISTER;
  payload: {

  };
}


export type SignActionTypes = LoginRequest | SetCurrentUser | LoginSuccess | LoginError | Register;
