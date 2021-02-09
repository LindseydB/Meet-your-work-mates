import React from 'react';
import axios from 'axios';

class Login extends React.Component {

    constructor(props) {
        super(props);

        
        this.state = {
            user: '',
            password: '',
        };

        // this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onChangeInputEmail = event => {

            this.setState({
            inputEmail: event.target.value
        });
    }

    onChangeInputPassword = event => {

        this.setState({
            inputPassword: event.target.value
        });
    }


    onChangeCheckbox = event => {

        console.log(event.target.checked);
        this.setState({
            isChecked: event.target.checked
        });
    }

    onSubmit = (e) => {

        e.preventDefault();
            email: this.inputEmail,
        }

        console.log(userInput.email);
        axios.post('http://localhost:4000/meet_mates/login',{u_email:userInput.email, u_pwd:userInput.password}).then((res)=>{
            if(res.data['login'] === 'success') {
                //Save the token locally
                this.props.parent_history.push('/dashboard');
            } else {
                console.log('User name or passowrd is not correct.');
                //Handle login failuire
            }
        });


                //  axios.get('http://mates.ts.r.appspot.com/meet_mates/'+username')
                 
                    // .then(res => {
                    //     console.log(res)
                    // })
                    // .catch(err => {
                    //     console.log(err)
                    // })
        
        
   };

    render() {

        return (
            <div>

                <div>
                    <form onSubmit={this.onSubmit}>
                        <label for="inputEmail"> Email</label>
                        <input type="email"
                            name="inputEmail"
                            placeholder="user@test.co.nz"
                            required 
                            onChange={e => this.inputEmail= e.target.value} 
                            />

                        <label for="inputPassword">Password</label>
                        <input type="password"
                            name="inputPassword"
                            placeholder="password"
                            required 
                            onChange={e => this.inputPassword= e.target.value} />

                        {/* <div>
                            <label for="remember">Remember me</label>
                            <input type="checkbox" //checked={isChecked}
                                name="rememberMe" onChange={this.onChangeCheckbox} />
                            <a href={"https://google.com"}>Forgot password?</a>
                        </div> */}

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
