import React, {Component} from 'react';

import Register from "../components/Register.js"
import Login from "../components/Login.js"

export default class LoginRegister extends Component{
  render() {
    return(
      <div>
        <div class="row">
          <div class="col-6 loginregister">
            <h2 class="heading">Sign in to Account</h2>
            <Login />
            </div>
            <div class="col-6 registerbg loginregister">
              <h2 class="heading">New to IBM? Welcome.</h2>
              <Register />
                </div>
              </div>
      </div>
    )
  }
}
