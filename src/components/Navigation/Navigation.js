import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../store/auth';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    {isAuthenticated && (
      <NavLink to="/contacts" exact>
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
