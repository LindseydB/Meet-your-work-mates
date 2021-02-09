import React from 'react';
import axios from 'axios';
class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: '',
            password: '',
        };

        this.onSubmitForm = this.onSubmitForm.bind(this);
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
            email: '',
            password: ''
        }

        if ((username === hardcodedCred.email) && (password === hardcodedCred.password)) {
            const token = '211333714swen';
            sessionStorage.setItem('auth-token', token);
            this.props.parent_history.push('/dashboard');

        } else if ((username === hardcodedCred.email) && (password !== hardcodedCred.password)) {
            alert('incorrect password');

        } else alert('username not found');
    }

    render() {

        return (
            <div>

                <div>
                    <form onSubmit={this.onSubmitForm}>
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

                        <div className="form-group">
                            <input type="submit" value="Login" className="btn btn-primary" />
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}
export default Login
