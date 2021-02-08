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


    onChangeCheckbox = event => {

        console.log(event.target.checked);
            this.setState({
                isChecked: event.target.checked
            });
        }


    onSubmitForm = (e) => {
        e.preventDefault();
        var username = e.target.elements.inputEmail.value;
        var password = e.target.elements.inputPassword.value;


        const LoginService = data => (
            axios.post('https://meet-work-mates.ts.r.appspot.com/', data)
                .then(res => res.status))

        let hardcodedCred = {
            email: 'test.user@ibm.co.nz',
            password: 'password123'
        }

        if ((username === hardcodedCred.email) && (password === hardcodedCred.password)) {
            //correct combination for login
            const token = '211333714swen';
            sessionStorage.setItem('auth-token', token);
            this.props.history.push("/dashboard");

        } else if ((username === hardcodedCred.email) && (password !== hardcodedCred.password)) {
            //bad combination
            alert('incorrect password');

        }else alert('username not found');
    }

    render() {

        return (
            <div>

                <div>
                    <form method="post" onSubmit={this.onSubmitForm}>

                        <label for="inputEmail"> Email</label>
                        <input type="email"
                            name="inputEmail"
                            placeholder="user@ibm.co.nz"
                            required onChange={this.onChange} />

                        <label for="inputPassword">Password</label>
                        <input type="password"
                            name="inputPassword"
                            placeholder="password"
                            required onChange={this.onChange} />


                        <div class="hide"> //div to hide elements - you can remove this after our presentation :)
                        <div>
                            <label for="remember">Remember me</label>
                            <input type="checkbox" //checked={isChecked}
                                name="rememberMe" onChange={this.onChangeCheckbox} />
                            <a href={"https://google.com"}>Forgot password?</a>
                        </div>



                <button onSubmit={this.onSubmitForm}>Sign In</button>
                <br />
                <br />
                <br />
                </div>

                    </form>

                      <div class="space">
                      </div>
                      <a href="/dashboard" class="demobtn">Sign In</a>

                </div>

            </div>

        )


    }
}
export default Login
