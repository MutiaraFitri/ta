import React, { Component } from 'react'
import '../../../loading.css';
import '../../../assets/style.css';
import NavbarTop from '../navbar/NavbarTopHome';
import NavbarBottom from '../navbar/NavbarBottom';
import header from '../../../assets/img/contact.png';
import service from '../../../assets/img/customer-support.png';
import history from '../../../assets/img/history.png';
import tickets from '../../../assets/img/tickets.png';
import clipboard from '../../../assets/img/clipboard.png';
import insurance from '../../../assets/img/insurance.png';
import problem from '../../../assets/img/problem.png';
import { Link } from 'react-router-dom';
import menu from '../../../assets/img/menu.png';
import curva from '../../../assets/img/curva.png';
import left from './../../../assets/img/left-arrow.png';
import Category from '../Category';

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <div style={{backgroundColor:"#141AA2",fontSize:"22px",fontFamily:"Muli",width:"100%",color:"white",padding:"16px 0px"}}>
                    <div className="menu" style={{position:"absolute",top:"7px"}}>
                        <img src={menu} alt=""/>
                    </div>
                    Detail Ticket
                </div>
                <div style={{ color: "black" }} style={{ width: "100%" }}>
                    <div className="search" style={{ width: "100%" }}>
                        <Link to='/home'>
                        <div className="row">
                            <div style={{ width: "20%",float:"left",marginLeft:"-10px" }}>
                                    <img src={left} alt="filter" /> 
                            </div>
                            
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="mainmenu" style={{ display: "flex" }}>
                    <div className="menu"
                        style={{
                            width:"330px",
                            margin: "20px 20px 0px 0px",
                            height:"38px",
                            backgroundColor: "#F7F8FF",
                        }}>
                        <div className="row" style={{ padding: "10px", margin: "0px", }}>
                            <div className="desc" style={{ width: "100%",display: "flex" }}>
                                <div className="desc-main" style={{ width: "33.333%", fontSize: "15px", fontWeight: "500",color:"#837F7F", }}>DAILY</div>
                                <div className="desc-main" style={{ width: "33.333%",borderRadius:"10px",backgroundColor:"#1477DB",fontSize: "15px", fontWeight: "500",color:"#fff"}}>WEEKLY</div>
                                <div className="desc-main" style={{ width: "33.333%",fontSize: "15px", fontWeight: "500",color:"#837F7F", }}>MONTHLY</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="curva" style={{ display: "flex" }}>
                    <div className="curva"
                        style={{
                            width:"330px",
                            margin: "20px 20px 0px 0px",
                            borderRadius: "10px",
                            height:"200px",
                        }}>

                        <div className="row" style={{ padding: "10px", margin: "0px", }}>
                                <img src={curva} alt="filter" />
                        </div>
                    </div>
                </div>
                <div className="menu-atas" style={{ display: "flex" }}>
                    <div className="menu"
                        style={{
                            width: "155px",
                            backgroundColor: "red",
                            margin: "20px 20px 0px 0px",
                            borderRadius: "10px",
                            backgroundColor: "#FFF9F9",
                            border: "2px solid #DEDEDE",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                        }}>
                        <div className="row" style={{ padding: "20px", margin: "0px" }}>

                            <div className="desc" style={{ width: "100%" }}>
                                <div className="desc-main" style={{ fontSize: "24px", fontWeight: "700" }}>12</div>
                                <div className="desc-main" style={{ fontSize: "12px", fontWeight: "500", textTransform: "uppercase" }}>Task Done</div>
                            </div>
                        </div>
                    </div>
                    <div className="menu"
                        style={{
                            width: "155px",
                            backgroundColor: "red",
                            margin: "20px 20px 0px 0px",
                            borderRadius: "10px",
                            backgroundColor: "#FFF9F9",
                            border: "2px solid #DEDEDE",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                        }}>
                        <div className="row" style={{ padding: "20px", margin: "0px" }}>
                        <div className="desc" style={{ width: "100%" }}>
                            <div className="desc-main" style={{ fontSize: "24px", fontWeight: "700" }}>70%</div>
                            <div className="desc-main" style={{ fontSize: "12px", fontWeight: "500", textTransform: "uppercase" }}>Rate</div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="menu_bawah">
                    <div className="menuReport"
                        style={{
                            width: "329px",
                            height: "81px",
                            backgroundColor: "red",
                            margin: "30px 0px 0px -25px",
                            borderRadius: "10px",
                            backgroundColor: "#FFF9F9",
                            border: "2px solid #DEDEDE",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                        }}>
                        <div className="row" style={{ padding: "10px", margin: "0px" }}>

                            <div className="gambar" style={{ width: "100%", padding: "5px 0px" }}>
                            <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600" ,color:"black", float:"left",marginLeft:"20px"}}>Created vs Done</div>
                            </div>
                            <div className="desc" style={{ width: "35%", textAlign: "left", paddingLeft: "20px" }}>
                                <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600" }}>17</div>
                                <div className="desc-main" style={{ fontSize: "12px", fontWeight: "300" }}>Created</div>
                            </div>
                            <div className="desc" style={{ width: "35%", textAlign: "left", paddingLeft: "20px" }}>
                                <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600" }}>12</div>
                                <div className="desc-main" style={{ fontSize: "12px", fontWeight: "300" }}>Done</div>
                            </div>
                        </div>
                    </div>
                    <div className="menu_bawah2">
                    <div className="menuReport"
                        style={{
                            width: "329px",
                            height: "81px",
                            backgroundColor: "red",
                            margin: "20px 0px 0px -25px",
                            borderRadius: "10px",
                            backgroundColor: "#FFF9F9",
                            border: "2px solid #DEDEDE",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                        }}>
                        <div className="row" style={{ padding: "10px", margin: "0px" }}>

                            <div className="gambar" style={{ width: "100%", padding: "5px 0px" }}>
                            <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600" ,color:"black", float:"left",marginLeft:"20px"}}>Customer Satisfaction</div>
                            </div>
                            <div className="desc" style={{ width: "35%", textAlign: "left", paddingLeft: "20px" }}>
                                <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600" }}>90,1%</div>
                                <div className="desc-main" style={{ fontSize: "12px", fontWeight: "300" }}>Average Rating</div>
                            </div>
                            <div className="desc" style={{ width: "35%", textAlign: "left", paddingLeft: "20px" }}>
                                <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600" }}>12</div>
                                <div className="desc-main" style={{ fontSize: "12px", fontWeight: "300" }}>User Review</div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <br/><br/><br/>
                </div>
                <NavbarBottom active="Home" />
            </div>
        )
    }
}

export default Home
