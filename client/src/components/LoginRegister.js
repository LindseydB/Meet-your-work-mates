import React, {Component} from 'react';

import Register from "../components/Register.js"
import Login from "../components/Login.js"

export default class LoginRegister extends Component{
  render() {
    return(
      <div>
        <div class="row">
          <div class="col-6">
              <Register />
          </div>
          <div class="col-6">
            <Login />
            </div>
        </div>


      </div>
    )
  }
}
