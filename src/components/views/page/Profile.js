import React, { Component } from 'react'
import NavbarTop from '../navbar/NavbarTop';
import NavbarBottom from '../navbar/NavbarBottom';
import avatar from '../../../assets/img/man.png';

export class Profile extends Component {
    render() {
        return (
            <div className="home">
                <NavbarTop back="true"/>
                <div className="Profile">
                    <img src={avatar} alt="" height="80px" style={{textAlign:"left"}}/>
                    <div className="row">
                        <div className="greeting">
                            Hello, Yuli !
                        </div>
                    </div>
                    <hr width="15%" align="left" noshade style={{border:"2px solid #c6c6c6"}}/>
                    <div className="row">
                        <div className="nameData">Employee ID</div>
                        <div className="valueData">12345</div>
                    </div>
                    <div className="row" style={{width:"100%",marginBottom:"70px"}}>
                        <button className="button loggout" type="submit">Loggout</button>
                    </div>
                </div>
                <NavbarBottom active="Profile"/>
            </div>
        )
    }
}

export default Profile
