import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to="/contacts" exact>
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
