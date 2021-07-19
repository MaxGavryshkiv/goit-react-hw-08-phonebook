import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authAction from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authAction.registerSuccess]: (_, { payload }) => payload.user,
  [authAction.loginSuccess]: (_, { payload }) => payload.user,
  [authAction.logoutSuccess]: () => initialUserState,
  [authAction.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authAction.registerSuccess]: (_, { payload }) => payload.token,
  [authAction.loginSuccess]: (_, { payload }) => payload.token,
  [authAction.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;
const error = createReducer(null, {
  [authAction.registerError]: setError,
  [authAction.loginSuccess]: setError,
  [authAction.logoutError]: setError,
  [authAction.getCurrentUserError]: setError,
});

export default combineReducers({
  user,
  token,
  error,
});
