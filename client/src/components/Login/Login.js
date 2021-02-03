import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: '',
            password: '',
            // isChecked: false
        };

        this.onSubmitForm = this.onSubmitForm.bind(this);
        console.log(this.props.parent_props);
    }

    onChangeCheckbox = event => {

        console.log(event.target.checked);
        this.setState({
            isChecked: event.target.checked
        });
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        let username = e.target.elements.inputEmail.value;
        let password = e.target.elements.inputPassword.value;

        let hardcodedCred = {
            email: 'test.user@test.co.nz',
            password: 'password123'
        }

        if ((username === hardcodedCred.email) && (password === hardcodedCred.password)) {
            const token = '211333714swen';
            sessionStorage.setItem('auth-token', token);
            // this.props.router.push('/dashboard');
            this.props.parent_props.history.push('/dashboard');
            // history.push('/dashboard');
            // <Link to = "/dashboard"/>;

        } else if ((username === hardcodedCred.email) && (password !== hardcodedCred.password)) {
            alert('incorrect password');

        } else alert('username not found');
    }

    render() {

        return (
            <div>

                <div>
                    <form method="post" onSubmit={this.onSubmitForm}>
                        <label for="inputEmail"> Email</label>
                        <input type="email"
                            name="inputEmail"
                            placeholder="user@test.co.nz"
                            required onChange={this.onChange} />

                        <label for="inputPassword">Password</label>
                        <input type="password"
                            name="inputPassword"
                            placeholder="password"
                            required onChange={this.onChange} />

                        <div>
                            <label for="remember">Remember me</label>
                            <input type="checkbox" //checked={isChecked}
                                name="rememberMe" onChange={this.onChangeCheckbox} />
                            <a href={"https://google.com"}>Forgot password?</a>
                        </div>

                        <button onSubmit={this.onSubmitForm}>Sign In</button>

                    </form>
                </div>
            </div>
        )
    }
}
export default Login
