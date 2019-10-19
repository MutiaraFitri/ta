import React, { Component } from 'react';
import '../../../loading.css';
import '../../../assets/style.css';
import logo from '../../../assets/img/logo_komatsu.png';

export class ForgotPassword extends Component {
    render() {
        return (
            <div>
                <div className="loading">
                    <div className="container">
                        <div className="row">
                            <img src={logo} alt="Komatsu" />
                        </div>
                    </div>
                    <form style={{ marginTop: "1rem" }}>
                        <div className="container">
                            <div className="row">
                                <input className="form-input" type="text" placeholder="Employee ID" />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "2rem" }}>
                            <button className="button-submit" type="submit">submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ForgotPassword
