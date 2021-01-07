import React, { Component } from 'react'
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Register extends Component {

    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state={
            username: "",
            email: "",
            password: "",
            rememberMe: false,
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
        
    }

    onSubmit(e){
        e.preventDefault();
        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }
        console.log(user);

        axios.post("http://localhost:5000/users/register", user)
        .then(res => console.log(res.data))
        .then(err => {
            if(!err){
                localStorage.setItem("username", user.username);
                localStorage.setItem("email", user.email);
                this.setState({
                    rememberMe: true,
                });
                localStorage.setItem("rememberMe", this.state.rememberMe );
                window.location.replace('/welcome');
            } else{
                // alert("TRY Again! either email is already exist or something wrong.");
                console.log(err);
            }
        });

        this.setState({
            username: "",
            email: "",
            password: ""
        })

    }



    render() {
        return (
            <div className="container wrapper d-flex align-items-center justify-content-center">
                <div className="border border-primary rounded w-75 p-3 shadow-lg">
                    <h3 className="text-center">Register your self</h3>

                    <form className="mt-3 p-3" onSubmit={this.onSubmit} >
                        <div className="form-group">
                            <input type="text" class="form-control" onChange={this.onChangeUsername} placeholder="Enter your full name" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" onChange={this.onChangeEmail} placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" onChange={this.onChangePassword} minLength="3" placeholder="Enter your password" />
                        </div>
                        <div className="d-flex justify-content-around flex-wrap">
                            <button type="submit" className="btn btn-success">Sign-Up</button>
                            <div className="login-col">
                                <p className="sub-heading pr-1 ">Already Signed-Up?</p>
                                <Link to="/login">
                                    <button type="submit" className="btn btn-primary">Log-In</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
