import React from 'react';
// import { authSelectors, authOperations } from '../../redux/auth';
// import defaultAvatar from './default-avatar.png';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div>
    <img src={avatar} alt="" width="32" />
    <span>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

export default UserMenu;
