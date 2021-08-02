import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import './AuthNav.css';

const AuthNav = () => (
  <div>
    <ButtonToolbar className="custom-btn-toolbar">
      <LinkContainer to="/register">
        <Button>Register</Button>
      </LinkContainer>
      <LinkContainer to="/login">
        <Button>Log in</Button>
      </LinkContainer>
    </ButtonToolbar>
    {/* <NavLink to="/register" exact>
      Register
    </NavLink>
    <NavLink to="/login" exact>
      Log in
    </NavLink> */}
  </div>
);

export default AuthNav;
