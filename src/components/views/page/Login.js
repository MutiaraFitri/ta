import React, { Component } from 'react';
import '../../../loading.css';
import '../../../assets/style.css';
import logo from '../../../assets/img/logo_komatsu.png';

export class Login extends Component {
    render() {
        return (
            <div className="loading">
                <div className="container">
                    <div className="row">
                        <img src={logo} alt="Komatsu"/>
                    </div>
                </div>
                <form style={{marginTop:"1rem"}}>
                    <div className="container">
                        <div className="row">
                            <input className="form-input" type="text" placeholder="Employee ID" />
                        </div>
                        <div className="row">
                            <input className="form-input" type="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"2rem"}}>
                        <button className="button-submit" type="submit">Login</button>
                    </div>
                    <div className="row" style={{marginTop:"3rem",fontWeight:"500"}}>
                        <a href="/forgotpassword" style={{margin:"0 auto"}}>Forgot password ?</a>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
