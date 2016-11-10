/* @flow */

export type ApiAction<T> = {
  key: string,
  payload: T,
};

export type ActionType =
  | 'LOGIN_REQUEST'
  | 'LOGIN_SUCCESS'
  | 'LOGIN_FAILURE'
  | 'LOGOUT_USER'
  | 'LOGOUT_USER_FAIL'
  | 'CHECK_AUTH_REQUEST'
  | 'CHECK_AUTH_SUCCESS'
  | 'CHECK_AUTH_FAILURE'
  | 'SIGNUP_USER_REQUEST'
  | 'SIGNUP_USER_SUCCESS'
  | 'SIGNUP_USER_FAILURE'
  | 'FORGOT_PASSWORD_REQUEST'
  | 'FORGOT_PASSWORD_SUCCESS'
  | 'FORGOT_PASSWORD_FAILURE'
  | 'RESET_PASSWORD_REQUEST'
  | 'RESET_PASSWORD_SUCCESS'
  | 'RESET_PASSWORD_FAILURE'
  | 'LOAD_POSTS_REQUEST'
  | 'LOAD_POSTS_SUCCESS'
  | 'LOAD_POSTS_FAILURE'
  | 'GET_POST_REQUEST'
  | 'GET_POST_SUCCESS'
  | 'GET_POST_FAILURE'
  | 'UPDATE_POST_REQUEST'
  | 'UPDATE_POST_SUCCESS'
  | 'UPDATE_POST_FAILURE'
  | 'SELECT_POST'
  | 'SELECT_POST_SUCCESS'
  | 'SELECT_POST_FAILURE'
  | 'CREATE_POST_REQUEST'
  | 'CREATE_POST_SUCCESS'
  | 'CREATE_POST_FAILURE'
  | 'DELETE_POST_FAILURE'
  | 'DELETE_POST_REQUEST'
  | 'DELETE_POST_SUCCESS';