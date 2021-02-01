import React, {Component} from 'react';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhonenumber = this.onChangePhonenumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name:'',
            last_name:'',
            password:'',
            email:'',
            phone_number: ''
        }
    }

    onChangeFirstName(e) {
        this.setState({
            first_name: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            last_name: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePhonenumber(e) {
        this.setState({
            phone_number: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newMate = {
            name: this.state.first_name + " " + this.state.last_name,
            email: this.state.email,
            mobile: this.state.phone_number
        }

        axios.post('https://api-dot-meet-work-mates.ts.r.appspot.com/meet_mates/add', newMate)
            .then(res => console.log(res.data));

        this.setState({
            first_name:'',
            last_name:'',
            password:'',
            email:'',
            phone_number: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Register</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First name: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.first_name}
                        onChange={this.onChangeFirstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last name: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.last_name}
                        onChange={this.onChangeLastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone number: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.phone_number}
                        onChange={this.onChangePhonenumber}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" className = "btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
