import React, { Component } from 'react';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>This Login Page</h1>
        <form onSubmit={null}>
          <label>
            Email
            <input type="email" name="email" value={email} onChange={null} />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={null}
            />
          </label>

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginView;
