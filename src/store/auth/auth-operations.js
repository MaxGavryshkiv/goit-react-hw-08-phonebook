import axios from 'axios';
import authActions from './auth-actions';
import { authAction } from '.';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', credentials);

    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authAction.loginRequest());

  try {
    const response = await axios.post('/users/login', credentials);

    token.set(response.data.token);
    dispatch(authAction.loginSuccess(response.data));
  } catch (error) {
    dispatch(authAction.logoutError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(authAction.logoutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(authAction.logoutSuccess());
  } catch (error) {
    dispatch(authAction.logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(authAction.getCurrentUserRequest);

  try {
    const response = await axios.get('/users/current');

    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

export default { register, logIn, logOut, getCurrentUser };
