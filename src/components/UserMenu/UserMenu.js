import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../store/auth';

const UserMenu = ({ email, onLogout }) => (
  <div>
    <span>{email}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  email: authSelectors.getUseremail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
