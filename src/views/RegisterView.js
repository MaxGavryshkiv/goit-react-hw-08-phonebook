import React, { Component } from 'react';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>This Register Page</h1>
        <form onSubmit={null}>
          <label>
            Name
            <input type="text" name="name" value={name} onChange={null} />
          </label>
          <label>
            Email
            <input type="text" name="email" value={email} onChange={null} />
          </label>
          <label>
            Password
            <input
              type="text"
              name="password"
              value={password}
              onChange={null}
            />
          </label>

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default RegisterView;
