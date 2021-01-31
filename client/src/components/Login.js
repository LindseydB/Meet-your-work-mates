import React from 'react';


class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: '',
            password: '',
            // isChecked: false
        };

        this.onSubmitForm = this.onSubmitForm.bind(this);

    }

    render() {

        return (
            <div>
              
                <div>
                    <form method="post" onSubmit={this.onSubmitForm}>

                        <label for="inputEmail"> Username or Email</label>
                        <input type="email"
                            name="inputEmail"
                            placeholder="user@ibm.co.nz"
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
