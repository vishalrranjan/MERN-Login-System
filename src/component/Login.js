import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {

    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.isValidEmail = this.isValidEmail.bind(this);
        this.isValidPassword = this.isValidPassword.bind(this);

        this.state={
            email: "",
            password: "",
        }
    }

    isValidEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    isValidPassword(e){
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(user);

        axios.post("http://localhost:5000/users/login", user)
        .then(res => console.log(res.data))
        .then(err => {
            if(!err){
                window.location.replace('/welcome');
            } else{
                console.log(err);
            }
        });

        this.setState({
            email: "",
            password: ""
        })
    }



    render() {
        return (
            <div className="container wrapper d-flex align-items-center justify-content-center">
                <div className="border border-primary rounded w-75 p-3 shadow-lg">
                    <h3 className="text-center">Login Here</h3>
                    <form className="mt-3 p-3" onSubmit={this.onSubmit} >
                        <div className="form-group">
                            <input type="email" className="form-control" onChange={this.isValidEmail} placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" onChange={this.isValidPassword} placeholder="Enter your password" />
                        </div>
                        <div className="d-flex justify-content-around flex-wrap">
                            <button type="submit" className="btn btn-success">Log-In</button>
                            <div className="login-col">
                                <p className="sub-heading pr-1 ">Not Signed-Up Yet?</p>
                                <Link to="/">
                                    <button type="submit" className="btn btn-primary">Sign-Up</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
