import React, { Component } from 'react'
import NavbarTop from '../navbar/NavbarTop';
import header from '../../../assets/img/contact.png';
import NavbarBottom from '../navbar/NavbarBottom';

export class About extends Component {
    render() {
        return (
            <div className="home">
                <NavbarTop back="true"/>
                <div className="about Report">
                    <div className="title-page">
                        About
                    </div>
                    <div className="row">
                        <img src={header} alt="Komatsu" style={{ width: "100%", margin: "0 auto", zIndex: "-2", marginBottom: "-15px" }} />
                    </div>
                    <div className="title-app">
                        ICT Ticketing System
                    </div>
                    <div className="version-app">
                        Version 1.0.0.13
                    </div>
                    <div className="description-app">
                    Aplikasi untuk mempermudah teknisi dalam melakukan pekerjaannya supaya lebih efektif dan lebih cepat
                    </div>
                </div>
                <NavbarBottom active="Home"/>
            </div>
        )
    }
}

export default About
