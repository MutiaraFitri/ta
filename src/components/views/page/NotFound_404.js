import React, { Component } from 'react';
import logo from '../../../assets/img/logo_komatsu.png';
import {Link} from 'react-router-dom'
import '../../../loading.css';
import '../../../assets/style.css';

export class NotFound_404 extends Component {
    render() {
        return (
            <div className="loading">
            <div className="container">
                <div className="row">
                    <img src={logo} alt="Komatsu"/>
                </div>
                <div className="row">
                    404 Not Found
                </div>
                <div className="row" style={{marginTop:"2rem"}}>
                    <Link to="/" style={{width:"100%"}}><button className="button-submit">Home</button></Link>
                </div>
            </div>
        </div>
        )
    }
}

export default NotFound_404
