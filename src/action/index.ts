const INCREASE = 'INCREASE';
interface Increase {
  type: string;
  amount: number;
}

const DECREASE = 'DECREASE';
interface Decrease {
  type: string;
  amount: number;
}

const LOGIN = 'LOGIN';
export interface Login {
  type: string;
  username: string;
  isAdmin: boolean;
}

const LOGIN_ASYNC = 'LOGIN_ASYNC';
export interface LoginAsync {
  type: string;
  username: string;
  password: string;
}

const REGISTER_ASYNC = 'REGISTER_ASYNC';
export interface RegisterAsync {
  type: string;
  username: string;
  password: string;
}

const LOGOUT = 'LOGOUT';
export interface Logout {
  type: string;
}

const LOGIN_ERROR = 'LOGIN_ERROR';
export interface LoginError {
  type: string;
  isError: boolean;
  message: string;
}

export function increase(n: number): Increase {
  return {
    type: INCREASE,
    amount: n,
  };
}

export function decrease(n: number): Decrease {
  return {
    type: DECREASE,
    amount: n,
  };
}

export function login(username: string, isAdmin: boolean): Login {
  return {
    type: LOGIN,
    username,
    isAdmin,
  };
}

export function loginAsync(username: string, password: string): LoginAsync {
  return {
    type: LOGIN_ASYNC,
    username,
    password,
  };
}

export function registerAsync(
  username: string,
  password: string,
): RegisterAsync {
  return {
    type: REGISTER_ASYNC,
    username,
    password,
  };
}

export function logout(): Logout {
  return {
    type: LOGOUT,
  };
}

export function error(isError: boolean, message: string): LoginError {
  return {
    type: LOGIN_ERROR,
    isError,
    message,
  };
}
