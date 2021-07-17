import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <div>
    <NavLink to="/register" exact>
      Register
    </NavLink>
    <NavLink to="/login" exact>
      Log in
    </NavLink>
  </div>
);

export default AuthNav;
