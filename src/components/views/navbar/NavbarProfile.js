import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo_komatsu.png';
import arrow from '../../../assets/img/left-arrow.png';
import profile from '../../../assets/img/bgProfile.png';
import mann from '../../../assets/img/mann.png';
import menu from '../../../assets/img/menu.png';
import back from './../../../assets/img/back.png';

export class NavbarTop extends Component {
    render() {
        // const back = (this.props.back == "true") ?<Link to="." ><div className="back-button"><img src={arrow} alt="" style={{padding:"15px"}}/></div></Link>:'';
        // const title = (this.props.title) ? <div className="title-pages" style={{paddingTop:"5px"}}>{this.props.title}</div>:<img src={logo} alt="Komatsu" style={{ margin: "0 auto", height: "30px",paddingTop:"15px" }} />;
        return (
            <div className="container" style={{ width: "100%" }}>
                <div className="menu" style={{ position: "absolute", top: "7px", marginLeft: "15px" }}>
                    <img src={back} alt="" style={{ width: "20px" }} />
                </div>
                <div className="row">
                    <img src={profile} style={{ marginTop: "-90px", width: "100%" }} />
                </div>
                <div style={{ position: "absolute", top: "175px", width: "100%", left: "0px" }}>
                    <div style={{ color: "black", fontSize: "20px" }}> Yayan Ruhiyan</div>
                    <div style={{ color: "black", fontSize: "14px" }}>Technician ID <span style={{ fontSize: "14px" }}> 12345</span></div>
                </div>
                <div className="profile"
                    style={{
                        top: "50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "110px",
                        height: "110px",
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                        border: "1px solid",
                        position: "absolute",
                        overflow: "hidden"
                    }}>
                    <img src={mann} alt="man" style={{ width: "100%" }} />
                </div>
            </div>
        )
    }
}

export default NavbarTop
