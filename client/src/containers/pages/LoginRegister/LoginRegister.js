import React, { Component } from 'react';
import Register from "../../../components/Register/Register.js"
import Login from "../../../components/Login/Login.js"

export default class LoginRegister extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6 loginregister">
            <h2 className="heading">Sign in to Account</h2>
            <Login parent_props={this.props} />
          </div>
          <div className="col-6 registerbg loginregister">
            <h2 className="heading">New to the company? Welcome.</h2>
            <Register />
          </div>
        </div>
      </div>
    )
  }
}
