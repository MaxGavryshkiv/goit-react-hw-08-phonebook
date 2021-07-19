const getIsAuthenticated = state => state.auth.token;

const getUseremail = state => state.auth.user.email;

export default {
  getIsAuthenticated,
  getUseremail,
};
