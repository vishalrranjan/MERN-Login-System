import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Welcome extends Component {

    constructor(props){
        super(props);
        this.onLogOut = this.onLogOut.bind(this);
        this.state = {
            rememberMe: true,
        }
    }

    
    onLogOut(){
        let rememberMe = this.setState({rememberMe: false});
        localStorage.setItem("rememberMe", this.state.rememberMe? rememberMe : '');
        console.log("rememberMe");
    }


    render() {
        let userName = localStorage.getItem("username");
        return (
            <div className="wrapper d-flex justify-content-center align-items-center">
                <div className="jumbotron container bg-info">
                    <h1 className="display-4 bg-info">Hello, {userName} </h1>
                    <p className="lead bg-info">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p className="bg-info">It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                    <div className="d-flex logout-btn justify-content-end flex-wrap">
                        <Link to='/login'>
                            <button type="submit" onClick={this.onLogOut} className="btn btn-warning">Log-Out</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
